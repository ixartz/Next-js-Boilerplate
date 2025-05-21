import { getTranslations, setRequestLocale } from "next-intl/server";

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: "Index",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: "Index",
  });

  return <h2 className="mt-5 font-bold text-2xl">{t("sponsors_title")}</h2>;
}
