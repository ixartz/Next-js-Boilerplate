import { getTranslations } from 'next-intl/server'

import FeatureImages from '@/components/tailwind-ui/reusable/feature-images/with_large_images'
import HighlightCasaDourada from '@/components/utilities/TextManipulation/HighlightCasaDourada'
import CenteredAccordion from '@/components/tailwind-ui/reusable/accordion/centered_accordion'
import TextBlocks from '@/components/custom/content/TextBlocks'

//** This data is for demo purposes - this data will come from Strapi */
import faqs from 'public/data/home/faqs.json'
import textContent from 'public/data/home/text-content.json'

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Homepage',
  })

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default function Homepage() {
  return (
    <>
      {/* welcome */}
      <section className="py-4 bg-neutral-800 text-center">
        <p className="block text-center mx-auto text-sm !my-0">
          {/* retrieve all data dynamically */}
          {textContent?.section_1?.paragraph_1}
          {/** FIX: useTranslations for content */}
        </p>
        <p className="block text-center mx-auto text-sm !my-0">
          {textContent?.section_1?.paragraph_2}
        </p>
      </section>

      {/* about us */}
      <section>
        <HighlightCasaDourada>
          {/* TextBlocks component - renders text content from json - 'public/data/home/text-content.json' */}
          <TextBlocks
            heading={textContent.section_2.heading}
            headingLevel="h1"
            content={textContent.section_2} // this renders multiple paragraphs related to the heading
          />
        </HighlightCasaDourada>
      </section>

      {/* offers */}
      <section>
        <TextBlocks
          heading={textContent.section_3.heading}
          headingLevel="h2"
          content={{}}
        />
        <div className="mt-10">
          <FeatureImages />
        </div>
      </section>

      {/* faq */}
      <section>
        <TextBlocks
          heading={textContent.section_4.heading}
          headingLevel="h2"
          content={{}}
        />
        <div className="mt-10">
          <CenteredAccordion data={faqs} />
        </div>
      </section>
    </>
  )
}
