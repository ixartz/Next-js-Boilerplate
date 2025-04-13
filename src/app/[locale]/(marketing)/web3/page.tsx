import BalanceERC20 from '@/components/BalanceERC20';
import SignMessage from '@/components/SignMessage';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import TransferERC20 from '@/components/TransferERC20';
import TransferNative from '@/components/TransferNative';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IAboutProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between bg-gray-900 p-4 text-lg font-semibold text-gray-100 [&_a:hover]:text-indigo-500 [&_a]:text-fuchsia-500">
        <ConnectButton accountStatus="address" chainStatus="none" showBalance={false} />
        <ThemeSwitcher />
      </div>

      <div className="flex flex-wrap gap-6 p-4">
        <SignMessage />
        <BalanceERC20 />
        <TransferNative />
        <TransferERC20 />
      </div>

    </>
  );
};
