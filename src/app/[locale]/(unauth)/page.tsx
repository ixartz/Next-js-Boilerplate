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
    heading: t('meta_title'),
    description: t('meta_description'),
  }
}

//** This content will come from Strapi and this following code will be removed */

const content = {
  section_1: {
    paragraph_1: `Welcome to CASA DOURADA, the world's biggest betting exchange. `,
    paragraph_2: `We offer a wide range of options to bet on including sports book, sport exchange, live casino & crash games.`,
  },
  section_2: {
    heading: 'Sobre Casa Dourada Brasil',
    paragraph_1: `
      The Casa Dourada brand is quite young. The company was founded in 2024, but today it can compete with other major betting sites in Brazil. Our main goal is to create the most diverse, comfortable, profitable and safe playing conditions for each client. The official Casa Dourada site offers you a wide range of gaming opportunities. Here you can bet on cricket, soccer, tennis and about 20 other sports, play slots, table and card games, join live gambling broadcasts, get lucrative bonuses, and make instant deposits and quick withdrawals.`,
    paragraph_2: `
      All calculations are available in BRL. You will be able to use the national currency for bets, deposits and withdrawals. Thanks to this, you will not have to calculate the rate and wait for a more favorable moment to get your winnings.
    `,
  },
  section_3: {
    heading: `Ofertas`,
    paragraph_1: `Welcome to CASA DOURADA, the world's biggest betting exchange. `,
  },
  section_4: {
    heading: `FAQ`,
    paragraph_1: `Welcome to CASA DOURADA, the world's biggest betting exchange. `,
  },
}
type ContentProps = {
  heading?: string
  headingLevel?: keyof JSX.IntrinsicElements // Ensure headingLevel is a valid HTML tag
  content: Record<string, string>
  highlight?: boolean
}

const Content: React.FC<ContentProps> = ({
  heading,
  headingLevel = 'h2',
  content,
  highlight = false,
}) => {
  const HeadingTag = headingLevel

  const sectionContent = (
    <div className="container text-center">
      <div className="mx-auto inline-block text-left">
        {heading && (
          <HeadingTag
            className={`uppercase text-3xl font-bold ${!highlight && 'mb-10'}`}
          >
            {heading}
          </HeadingTag>
        )}
        {Object.keys(content)
          .filter((key) => key.startsWith('paragraph'))
          .map((key, index) => (
            <p key={index} className="text-base font-normal">
              {content[key]}
            </p>
          ))}
      </div>
    </div>
  )

  return sectionContent
}

export default function Index() {
  return (
    <>
      <section className="py-4 bg-neutral-800 text-center [&_p]:my-0">
        <p className="block text-center mx-auto text-sm">
          {content?.section_1?.paragraph_1}
        </p>
        <p className="block text-center mx-auto text-sm">
          {content?.section_1?.paragraph_2}
        </p>
      </section>
      <HighlightCasaDourada>
        <section>
          <Content
            heading={content.section_2.heading}
            headingLevel="h1"
            content={content.section_2}
          />
        </section>
      </HighlightCasaDourada>
      <section>
        <Content
          heading={content.section_3.heading}
          headingLevel="h2"
          content={{}}
        />
        <FeatureImages />
      </section>
      <section>
        <Content
          heading={content.section_4.heading}
          headingLevel="h2"
          content={{}}
        />
        <CenteredAccordion />
      </section>
    </>
  )
}
