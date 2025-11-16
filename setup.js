#!/usr/bin/env node

/**
 * Script di configurazione automatica per Next.js Boilerplate
 * Personalizza il boilerplate per un nuovo progetto
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

// Colori per il terminale
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Funzione helper per fare domande
function question(prompt) {
  return new Promise((resolve) => {
    rl.question(`${colors.blue}${prompt}${colors.reset}`, (answer) => {
      resolve(answer.trim());
    });
  });
}

// Configurazione di default
const defaultConfig = {
  projectName: 'My Awesome Project',
  projectDescription: 'A modern Next.js application',
  authorName: 'Your Name',
  authorEmail: 'your.email@example.com',
  useAuth: true,
  useDatabase: true,
  useI18n: true,
  languages: ['en', 'it'],
  defaultLanguage: 'en',
  useSentry: false,
  useAnalytics: false,
};

async function main() {
  console.log(`
${colors.bright}${colors.green}
╔═══════════════════════════════════════════════════════════╗
║   Next.js Boilerplate - Configurazione Automatica        ║
║   Setup rapido per i tuoi progetti UI/UX                 ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}
  `);

  console.log(`${colors.yellow}Iniziamo la configurazione del tuo nuovo progetto!${colors.reset}\n`);

  // Raccolta informazioni
  const config = {
    projectName: await question(`Nome del progetto [${defaultConfig.projectName}]: `) || defaultConfig.projectName,
    projectDescription: await question(`Descrizione del progetto [${defaultConfig.projectDescription}]: `) || defaultConfig.projectDescription,
    authorName: await question(`Nome autore [${defaultConfig.authorName}]: `) || defaultConfig.authorName,
    authorEmail: await question(`Email autore [${defaultConfig.authorEmail}]: `) || defaultConfig.authorEmail,
  };

  // Domande su funzionalità
  console.log(`\n${colors.bright}Configurazione funzionalità:${colors.reset}\n`);

  const useAuthAnswer = await question('Vuoi includere autenticazione? (s/n) [s]: ');
  config.useAuth = !useAuthAnswer || useAuthAnswer.toLowerCase() === 's' || useAuthAnswer.toLowerCase() === 'y';

  const useDbAnswer = await question('Vuoi includere database? (s/n) [s]: ');
  config.useDatabase = !useDbAnswer || useDbAnswer.toLowerCase() === 's' || useDbAnswer.toLowerCase() === 'y';

  const useI18nAnswer = await question('Vuoi includere multi-lingua (i18n)? (s/n) [s]: ');
  config.useI18n = !useI18nAnswer || useI18nAnswer.toLowerCase() === 's' || useI18nAnswer.toLowerCase() === 'y';

  if (config.useI18n) {
    const languagesInput = await question('Lingue supportate (separate da virgola) [en,it]: ');
    config.languages = languagesInput ? languagesInput.split(',').map(l => l.trim()) : ['en', 'it'];
    config.defaultLanguage = await question(`Lingua di default [${config.languages[0]}]: `) || config.languages[0];
  }

  const useSentryAnswer = await question('Vuoi includere Sentry per error monitoring? (s/n) [n]: ');
  config.useSentry = useSentryAnswer && (useSentryAnswer.toLowerCase() === 's' || useSentryAnswer.toLowerCase() === 'y');

  const useAnalyticsAnswer = await question('Vuoi includere PostHog analytics? (s/n) [n]: ');
  config.useAnalytics = useAnalyticsAnswer && (useAnalyticsAnswer.toLowerCase() === 's' || useAnalyticsAnswer.toLowerCase() === 'y');

  console.log(`\n${colors.green}${colors.bright}Configurazione completata!${colors.reset}\n`);
  console.log('Riepilogo:');
  console.log(`  - Nome: ${colors.bright}${config.projectName}${colors.reset}`);
  console.log(`  - Autenticazione: ${config.useAuth ? colors.green + '✓' : colors.red + '✗'}${colors.reset}`);
  console.log(`  - Database: ${config.useDatabase ? colors.green + '✓' : colors.red + '✗'}${colors.reset}`);
  console.log(`  - Multi-lingua: ${config.useI18n ? colors.green + '✓ (' + config.languages.join(', ') + ')' : colors.red + '✗'}${colors.reset}`);
  console.log(`  - Sentry: ${config.useSentry ? colors.green + '✓' : colors.red + '✗'}${colors.reset}`);
  console.log(`  - Analytics: ${config.useAnalytics ? colors.green + '✓' : colors.red + '✗'}${colors.reset}\n`);

  const confirmAnswer = await question('Procedere con la configurazione? (s/n) [s]: ');
  if (confirmAnswer && confirmAnswer.toLowerCase() !== 's' && confirmAnswer.toLowerCase() !== 'y') {
    console.log(`${colors.yellow}Configurazione annullata.${colors.reset}`);
    rl.close();
    return;
  }

  rl.close();

  // Applica configurazione
  await applyConfiguration(config);

  console.log(`\n${colors.green}${colors.bright}✓ Configurazione completata con successo!${colors.reset}\n`);
  console.log(`${colors.yellow}Prossimi passi:${colors.reset}`);
  console.log(`  1. Rinomina .env.local.template in .env.local`);
  console.log(`  2. Configura le tue chiavi API in .env.local`);
  console.log(`  3. Esegui: npm install`);
  console.log(`  4. Esegui: npm run dev\n`);
  console.log(`${colors.blue}Documentazione completa: vedi SETUP.md${colors.reset}\n`);
}

async function applyConfiguration(config) {
  console.log(`\n${colors.yellow}Applicazione configurazione...${colors.reset}\n`);

  // 1. Aggiorna AppConfig.ts
  console.log('  → Aggiornamento AppConfig.ts...');
  updateAppConfig(config);

  // 2. Aggiorna package.json
  console.log('  → Aggiornamento package.json...');
  updatePackageJson(config);

  // 3. Crea .env.local.template
  console.log('  → Creazione .env.local.template...');
  createEnvTemplate(config);

  // 4. Aggiorna README.md
  console.log('  → Aggiornamento README.md...');
  updateReadme(config);

  // 5. Configura lingue se necessario
  if (config.useI18n) {
    console.log('  → Configurazione lingue...');
    await setupLanguages(config);
  }

  console.log(`${colors.green}  ✓ Tutti i file aggiornati${colors.reset}`);
}

function updateAppConfig(config) {
  const appConfigPath = path.join(__dirname, 'src', 'utils', 'AppConfig.ts');

  let content = fs.readFileSync(appConfigPath, 'utf-8');

  // Aggiorna il nome
  content = content.replace(/name: '[^']*'/, `name: '${config.projectName}'`);

  // Aggiorna le lingue se i18n è abilitato
  if (config.useI18n) {
    const localesArray = config.languages.map(l => `'${l}'`).join(', ');
    content = content.replace(/locales: \[[^\]]*\]/, `locales: [${localesArray}]`);
    content = content.replace(/defaultLocale: '[^']*'/, `defaultLocale: '${config.defaultLanguage}'`);
  }

  fs.writeFileSync(appConfigPath, content);
}

function updatePackageJson(config) {
  const packageJsonPath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  packageJson.name = config.projectName.toLowerCase().replace(/\s+/g, '-');
  packageJson.description = config.projectDescription;
  packageJson.author = `${config.authorName} <${config.authorEmail}>`;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
}

function createEnvTemplate(config) {
  const envTemplatePath = path.join(__dirname, '.env.local.template');

  let envContent = `# ${config.projectName} - Environment Variables
# Rinomina questo file in .env.local e configura i tuoi valori

# Next.js
NEXT_TELEMETRY_DISABLED=1

`;

  if (config.useAuth) {
    envContent += `# Clerk Authentication
# Ottieni le tue chiavi da: https://clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

`;
  }

  if (config.useDatabase) {
    envContent += `# Database
# Locale: usa PGlite (già incluso, nessuna configurazione necessaria)
# Produzione: https://www.prisma.io/?via=nextjsboilerplate
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/postgres

`;
  }

  if (config.useSentry) {
    envContent += `# Sentry Error Monitoring
# Ottieni le tue chiavi da: https://sentry.io
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
SENTRY_ORGANIZATION=your_organization
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_auth_token

`;
  }

  if (config.useAnalytics) {
    envContent += `# PostHog Analytics
# Ottieni le tue chiavi da: https://posthog.com
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

`;
  }

  envContent += `# Arcjet Security (opzionale)
# Ottieni la tua chiave da: https://arcjet.com
# ARCJET_KEY=your_arcjet_key_here

# Better Stack Logging (opzionale)
# NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN=
# NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST=
`;

  fs.writeFileSync(envTemplatePath, envContent);
}

function updateReadme(config) {
  const readmePath = path.join(__dirname, 'README.md');
  let content = fs.readFileSync(readmePath, 'utf-8');

  // Aggiorna il titolo principale se contiene "Boilerplate"
  const newTitle = `# ${config.projectName}`;
  content = content.replace(/^# .+$/m, newTitle);

  // Aggiunge una sezione di configurazione
  const setupSection = `\n## Progetto configurato

Questo progetto è stato generato dal Next.js Boilerplate ed è configurato con:

- **Nome**: ${config.projectName}
- **Descrizione**: ${config.projectDescription}
- **Autore**: ${config.authorName}
- **Autenticazione**: ${config.useAuth ? 'Abilitata (Clerk)' : 'Disabilitata'}
- **Database**: ${config.useDatabase ? 'Abilitato (DrizzleORM + PostgreSQL)' : 'Disabilitato'}
- **Multi-lingua**: ${config.useI18n ? `Abilitata (${config.languages.join(', ')})` : 'Disabilitata'}
- **Error Monitoring**: ${config.useSentry ? 'Abilitato (Sentry)' : 'Disabilitato'}
- **Analytics**: ${config.useAnalytics ? 'Abilitato (PostHog)' : 'Disabilitato'}

Per maggiori dettagli sul setup, vedi [SETUP.md](SETUP.md).

---

`;

  // Inserisce dopo il titolo
  content = content.replace(/(^# .+$\n)/m, `$1\n${setupSection}`);

  fs.writeFileSync(readmePath, content);
}

async function setupLanguages(config) {
  const localesDir = path.join(__dirname, 'src', 'locales');

  // Assicurati che le lingue richieste abbiano i file JSON
  for (const lang of config.languages) {
    const langFile = path.join(localesDir, `${lang}.json`);

    if (!fs.existsSync(langFile)) {
      // Copia dal file inglese come base
      const enFile = path.join(localesDir, 'en.json');
      if (fs.existsSync(enFile)) {
        const enContent = JSON.parse(fs.readFileSync(enFile, 'utf-8'));

        // Aggiorna il nome del progetto
        if (enContent.BaseTemplate) {
          enContent.BaseTemplate.title = config.projectName;
        }

        fs.writeFileSync(langFile, JSON.stringify(enContent, null, 2) + '\n');
        console.log(`    ✓ Creato ${lang}.json`);
      }
    }
  }
}

// Gestione errori
process.on('unhandledRejection', (error) => {
  console.error(`\n${colors.red}${colors.bright}Errore:${colors.reset}`, error.message);
  process.exit(1);
});

// Esegui
main().catch((error) => {
  console.error(`\n${colors.red}${colors.bright}Errore durante la configurazione:${colors.reset}`, error.message);
  process.exit(1);
});
