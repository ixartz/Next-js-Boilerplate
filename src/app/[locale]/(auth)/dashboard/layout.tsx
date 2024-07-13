// import { useTranslations } from 'next-intl';
// import LocaleSwitcher from '@/components/utilities/LocaleSwitcher';
// import { LogOutButton } from '@/components/utilities/LogOutButton';
import { BaseTemplate } from '@/templates/BaseTemplate'

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <BaseTemplate leftNav={<li></li>} rightNav={<li></li>} siteNav={<li></li>}>
      {props.children}
    </BaseTemplate>
  )
}
