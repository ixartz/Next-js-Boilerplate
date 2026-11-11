import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import * as z from 'zod';

// Fills missing translations in `src/locales/*.json` with Neon AI Gateway: https://neon.com/docs/ai-gateway/overview
// Optional: Crowdin stays the default translation workflow, this script is a quick alternative for local iteration.
// Usage: set NEON_AI_GATEWAY_BASE_URL and NEON_AI_GATEWAY_TOKEN in `.env.local`, then run `npm run i18n:translate`.

type Messages = { [key: string]: string | Messages };

const MessagesSchema: z.ZodType<Messages> = z.lazy(() =>
  z.record(z.string(), z.union([z.string(), MessagesSchema])),
);

const CompletionSchema = z.object({
  choices: z
    .array(
      z.object({
        message: z.object({
          // Some models return content blocks instead of a plain string
          content: z.union([
            z.string(),
            z.array(z.object({ type: z.string(), text: z.string().optional() })),
          ]),
        }),
      }),
    )
    .min(1),
});

const env = z
  .object({
    NEON_AI_GATEWAY_BASE_URL: z.url(),
    NEON_AI_GATEWAY_TOKEN: z.string().min(1),
    NEON_AI_GATEWAY_MODEL: z.string().min(1).default('gpt-oss-120b'),
  })
  .parse(process.env);

const LOCALES_DIR = path.join(process.cwd(), 'src/locales');
const SOURCE_LOCALE = 'en';

/**
 * Flattens nested messages into dot-separated keys.
 * @param messages - Nested messages.
 * @param prefix - Key prefix of the current level.
 * @returns Flat map of message keys to strings.
 */
const flatten = (messages: Messages, prefix = '') => {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(messages)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      result[fullKey] = value;
    } else {
      Object.assign(result, flatten(value, fullKey));
    }
  }

  return result;
};

/**
 * Sets a string at a dot-separated key, creating intermediate levels when needed.
 * @param messages - Nested messages to update.
 * @param key - Dot-separated message key.
 * @param value - Translated string.
 */
const setMessage = (messages: Messages, key: string, value: string) => {
  const segments = key.split('.');
  const last = segments.pop() ?? key;
  let current = messages;

  for (const segment of segments) {
    const next = current[segment];

    if (typeof next === 'object') {
      current = next;
    } else {
      const created: Messages = {};
      current[segment] = created;
      current = created;
    }
  }

  current[last] = value;
};

/**
 * Lists ICU arguments and rich-text tags so translations can be checked for dropped tokens.
 * @param message - Message string.
 * @returns Sorted, comma-separated tokens.
 */
const getTokens = (message: string) =>
  [...message.matchAll(/\{(\w+)|<\/?(\w+)/gu)]
    .map((match) => match[0])
    .toSorted()
    .join(',');

/**
 * Translates messages with Neon AI Gateway's OpenAI-compatible chat completions endpoint.
 * @param params - Translation parameters.
 * @param params.locale - Target locale code.
 * @param params.missing - Source messages to translate.
 * @param params.existing - Existing translations, used as a style reference.
 * @returns Translated messages keyed like the input.
 * @throws {Error} When the gateway request fails or returns invalid JSON.
 */
const translate = async (params: {
  locale: string;
  missing: Record<string, string>;
  existing: Record<string, string>;
}) => {
  const language = new Intl.DisplayNames(['en'], { type: 'language' }).of(params.locale);

  const response = await fetch(`${env.NEON_AI_GATEWAY_BASE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.NEON_AI_GATEWAY_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: env.NEON_AI_GATEWAY_MODEL,
      messages: [
        {
          role: 'system',
          content: [
            `You translate user interface strings of a web app from English to ${language} (${params.locale}).`,
            'The user sends JSON with "existing" translations (style reference) and "translate" (English strings to translate).',
            'Reply with only a JSON object that has exactly the keys of "translate" and the translated strings as values.',
            'Keep ICU placeholders such as {count} and rich-text tags such as <url></url> unchanged.',
            'Keep product and brand names untranslated. Use sentence case.',
          ].join('\n'),
        },
        {
          role: 'user',
          content: JSON.stringify({ existing: params.existing, translate: params.missing }),
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`AI Gateway request failed (${response.status}): ${await response.text()}`);
  }

  const completion = CompletionSchema.parse(await response.json());
  const content = completion.choices[0]?.message.content ?? '';
  const text =
    typeof content === 'string' ? content : content.map((block) => block.text ?? '').join('');

  // Models sometimes wrap JSON in a Markdown code fence
  const json = text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1);

  return z.record(z.string(), z.string()).parse(JSON.parse(json));
};

/**
 * Reads and validates the messages of a locale.
 * @param locale - Locale code.
 * @returns Nested messages.
 */
const readMessages = async (locale: string) => {
  const content = await readFile(path.join(LOCALES_DIR, `${locale}.json`), 'utf-8');

  return MessagesSchema.parse(JSON.parse(content));
};

/**
 * Translates the keys missing from a locale file and writes the result.
 * @param locale - Target locale code.
 * @param source - Flat source messages.
 */
const translateLocale = async (locale: string, source: Record<string, string>) => {
  const target = await readMessages(locale);
  const existing = flatten(target);
  const missing = Object.fromEntries(Object.entries(source).filter(([key]) => !existing[key]));
  const missingKeys = Object.keys(missing);

  if (missingKeys.length === 0) {
    console.info(`[${locale}] Up to date`);
    return;
  }

  console.info(
    `[${locale}] Translating ${missingKeys.length} key(s) with ${env.NEON_AI_GATEWAY_MODEL}`,
  );
  const translated = await translate({ locale, missing, existing });

  for (const key of missingKeys) {
    const value = translated[key];
    const original = missing[key] ?? '';

    if (!value) {
      console.warn(`[${locale}] Skipped ${key}: missing from the model response`);
    } else if (getTokens(value) === getTokens(original)) {
      setMessage(target, key, value);
    } else {
      console.warn(`[${locale}] Skipped ${key}: placeholders or tags changed in "${value}"`);
    }
  }

  await writeFile(path.join(LOCALES_DIR, `${locale}.json`), `${JSON.stringify(target, null, 2)}\n`);
  console.info(`[${locale}] Updated ${locale}.json`);
};

const source = flatten(await readMessages(SOURCE_LOCALE));
const files = await readdir(LOCALES_DIR);
const targetLocales = files
  .filter((file) => file.endsWith('.json') && file !== `${SOURCE_LOCALE}.json`)
  .map((file) => path.basename(file, '.json'));

await Promise.all(
  targetLocales.map(async (locale) => {
    await translateLocale(locale, source);
  }),
);
