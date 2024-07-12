import { getTranslations } from 'next-intl/server'
import FeatureImages from '@/components/tailwind-ui/reusable/feature-images/with_large_images'
import HighlightCasaDourada from '@/components/utilities/TextManipulation/HighlightCasaDourada'
import CenteredAccordion from '@/components/tailwind-ui/reusable/accordion/centered_accordion'

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  })

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

//** This content will come from Strapi and this following code will be removed */
const content = {
  intro: {
    paragraph_1: `Welcome to CASA DOURADA, the world's biggest betting exchange. `,
    paragraph_2: `We offer a wide range of options to bet on including sports book, sport exchange, live casino & crash games.`,
  },
  about: {
    title: 'Sobre Casa Dourada Brasil',
    paragraph_1: `
      The Casa Dourada brand is quite young. The company was founded in 2024, but today it can compete with other major betting sites in Brazil. Our main goal is to create the most diverse, comfortable, profitable and safe playing conditions for each client. The official Casa Dourada site offers you a wide range of gaming opportunities. Here you can bet on cricket, soccer, tennis and about 20 other sports, play slots, table and card games, join live gambling broadcasts, get lucrative bonuses, and make instant deposits and quick withdrawals.`,
    paragraph_2: `
      All calculations are available in BRL. You will be able to use the national currency for bets, deposits and withdrawals. Thanks to this, you will not have to calculate the rate and wait for a more favorable moment to get your winnings.
    `,
  },
  offers: {
    title: 'Ofertas',
  },
  faq: {
    title: 'FAQ',
  },
}

export default function Index() {
  return (
    <div>
      <section className="bg-neutral-800 pt-2 pb-8 sm:py-5">
        <div className="mx-auto sm:w-full lg:w-4/5 xl:w-4/5 px-3 sm:px-6">
          <p className="sm:!my-0 text-base text-center font-normal">
            {content.intro.paragraph_1}
          </p>
          <p className="!my-0 text-base text-center font-normal">
            {content.intro.paragraph_2}
          </p>
        </div>
      </section>
      <HighlightCasaDourada>
        <section className="mx-auto max-w-[666px] sm:px-6 px-6">
          <h1 className="uppercase text-3xl font-bold">
            {content.about.title}
          </h1>
          <p className="text-sm">{content.about.paragraph_1}</p>
          <p className="text-sm">{content.about.paragraph_2}</p>
        </section>
      </HighlightCasaDourada>
      <section className="mx-auto w-full">
        <h2 className="uppercase text-3xl font-bold text-center mb-10">
          {content.offers.title}
        </h2>
        <FeatureImages />
      </section>
      <section>
        <h2 className="uppercase text-3xl font-bold text-center mb-10">
          {content.faq.title}
        </h2>
        <CenteredAccordion />
      </section>
    </div>
  )
}
