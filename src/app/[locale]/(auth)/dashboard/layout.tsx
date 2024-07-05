// import { useTranslations } from 'next-intl';

// import LocaleSwitcher from '@/components/LocaleSwitcher';
// import { LogOutButton } from '@/components/LogOutButton';
import { BaseTemplate } from '@/templates/BaseTemplate';
import NavMain from '../../../../components/tailwind-ui/application-ui/navigation/navbars/dark_with_quick_action';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  // const t = useTranslations('DashboardLayout');

  return (
    <BaseTemplate leftNav={<NavMain />} rightNav={<NavMain />}>
      {props.children}
    </BaseTemplate>
  );
}
