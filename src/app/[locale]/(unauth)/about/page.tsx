import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function About() {
  const t = useTranslations('About');

  return (
    <>
      <p>{t('about_paragraph')}</p>

      <div className="mt-2 text-center text-sm">
        {`${t('translation_powered_by')} `}
        <a href="https://l.crowdin.com/next-js" target="_blank">
          Crowdin
        </a>
      </div>

      <a href="https://l.crowdin.com/next-js">
        <Image
          className="mx-auto mt-2"
          src="https://support.crowdin.com/assets/logos/core-logo/svg/crowdin-core-logo-cDark.svg"
          alt="Crowdin Translation Management System"
          width={130}
          height={112}
        />
      </a>
    </>
  );
}
