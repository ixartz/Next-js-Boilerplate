import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <main className="space-y-4 p-6">
      <div className="rounded border border-border bg-background p-4 text-foreground">
        Normal background
      </div>
      <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
        Primary Button
      </button>
      <button className="bg-error text-error-foreground rounded px-4 py-2">
        Error Button
      </button>
    </main>
  );
};
