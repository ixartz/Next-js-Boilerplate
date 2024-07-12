// import { useTranslations } from 'next-intl'
// import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate'
import Link from 'next/link'
import ReloadIcon from '@/components/icons/ReloadIcon'
import Button from '@/components/tailwind-ui/reusable/buttons'

export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations()

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none rounded-full bg-green block p-1"
            >
              <ReloadIcon />
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <Button
              size="lg"
              variant="default"
              bgColor="green-500"
              hoverColor="green-300"
              textColor="white"
              hoverTextColor="white"
              // href={t('Login.href')}
              href=""
            >
              Entrar
              {/* {t('Login.site_nav_text')} */}
            </Button>
          </li>
          <li>
            <Button
              size="lg"
              variant="default"
              bgColor="blue-500"
              hoverColor="blue-300"
              textColor="white"
              hoverTextColor="white"
              // href={t('Register.href')}
              href=""
            >
              {/* {t('Register.site_nav_text')} */}
              Cadastre-se
            </Button>
          </li>

          {/* <li>
            <LocaleSwitcher />
          </li> */}
        </>
      }
      siteNav={
        <>
          {[
            {
              href: '',
              text: 'apostas esportivas',
              // href: t('Sportsbook.href'),
              // text: t('Sportsbook.site_nav_text'),
              image: '/assets/images/sitenav/apostas-esportivas.webp',
            },
            {
              href: '',
              text: 'cassino ao vivo',
              // href: t('LiveCasino.href'),
              // text: t('LiveCasino.site_nav_text'),
              image: '/assets/images/sitenav/cassino-ao-vivo.webp',
            },
            {
              href: '',
              text: 'jogos de crash',
              // href: t('CrashGames.href'),
              // text: t('CrashGames.site_nav_text'),
              image: '/assets/images/sitenav/jogos-de-crash.webp',
            },
            {
              href: '',
              text: 'caça-niqueis',
              // href: t('SlotGames.href'),
              // text: t('SlotGames.site_nav_text'),
              image: '/assets/images/sitenav/caca-niqueis.webp',
            },
            {
              href: '',
              text: 'sports exchange',
              // href: t('SportsExchange.href'),
              // text: t('SportsExchange.site_nav_text'),
              image: '/assets/images/sitenav/intercambio-esportivo.webp',
            },
          ].map((item, index) => (
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
                href={item.href}
              >
                {item.text}
              </Button>
            </li>
          ))}
        </>
      }
    >
      <div className="text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  )
}
