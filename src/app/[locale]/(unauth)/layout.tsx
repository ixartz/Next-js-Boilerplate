import { useTranslations } from 'next-intl'

// import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate'
import ReloadIcon from '@/components/icons/ReloadIcon'
import Button from '@/components/tailwind-ui/reusable/buttons'

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations()
  const mainPages = [
    {
      href: t('Sportsbook.href'),
      text: t('Sportsbook.site_nav_text'),
      image: '/assets/images/sitenav/apostas-esportivas.webp',
    },
    {
      href: t('LiveCasino.href'),
      text: t('LiveCasino.site_nav_text'),
      image: '/assets/images/sitenav/cassino-ao-vivo.webp',
    },
    {
      href: t('CrashGames.href'),
      text: t('CrashGames.site_nav_text'),
      image: '/assets/images/sitenav/jogos-de-crash.webp',
    },
    {
      href: t('SlotGames.href'),
      text: t('SlotGames.site_nav_text'),
      image: '/assets/images/sitenav/caca-niqueis.webp',
    },
    {
      href: t('SportsExchange.href'),
      text: t('SportsExchange.site_nav_text'),
      image: '/assets/images/sitenav/intercambio-esportivo.webp',
    },
  ]
  const memberPages = [
    {
      href: t('Login.href'),
      text: t('Login.site_nav_text'),
    },
    {
      href: t('Register.href'),
      text: t('Register.site_nav_text'),
    },
  ]

  // Function to generate main nav items
  const generateMainNavItems = () => (
    <>
      {mainPages.map((item, index) => (
        <li key={index}>
          <Button
            size="xs"
            variant="outline"
            bgColor="transparent"
            hoverColor="green-500"
            textColor="neutral-200"
            hoverTextColor="green-500"
            leftImage={item.image}
            leftImageAlt={item.text}
            responsive={false}
            href={item.href}
          >
            {item.text}
          </Button>
        </li>
      ))}
    </>
  )

  // Function to generate member nav items
  const generateMemberNavItems = () => (
    <>
      {memberPages.map((item, index) => (
        <li key={index} className="-ml-2">
          <Button
            size="lg"
            variant="default"
            bgColor={index === 0 ? 'green-500' : 'blue-500'}
            hoverColor={index === 0 ? 'green-300' : 'blue-300'}
            textColor="white"
            hoverTextColor="white"
            href={item.href}
          >
            {item.text}
          </Button>
        </li>
      ))}
    </>
  )

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <a
              href="/"
              className="border-none rounded-full bg-green block p-1"
              aria-label="refresh"
            >
              <ReloadIcon />
            </a>
          </li>
        </>
      }
      rightNav={generateMemberNavItems()}
      siteNav={generateMainNavItems()}
    >
      <div className="text-xl">{props.children}</div>

      {/* Hidden nav */}
      <nav className="hidden">
        <ul>
          {generateMainNavItems()}
          {generateMemberNavItems()}
        </ul>
      </nav>
    </BaseTemplate>
  )
}
