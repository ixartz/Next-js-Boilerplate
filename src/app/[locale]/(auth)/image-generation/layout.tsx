import { setRequestLocale } from 'next-intl/server';

export default async function ImageGenerationLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50">
      {props.children}
    </div>
  );
}
