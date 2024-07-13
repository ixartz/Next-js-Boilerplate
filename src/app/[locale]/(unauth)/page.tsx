import { getTranslations } from 'next-intl/server'
import FeatureImages from '@/components/tailwind-ui/reusable/feature-images/with_large_images'
import CenteredAccordion from '@/components/tailwind-ui/reusable/accordion/centered_accordion'
import HighlightCasa from '@/components/utilities/TextManipulation/HighlightCasa'

//** This data is for demo purposes - this data will come from Strapi */
import faqs from 'public/data/home/faqs.json'
import textContent from 'public/data/home/text-content.json'

//** meta titles - need to add og:title and og:description to html <head> */
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
      {/* sections have default responsive vertical padding which can be overridden */}
      <section id="1" className="p-0">
        <div className="px-2 py-4 bg-neutral-800 text-center">
          <p className="inline-block text-xs md:text-sm my-0 whitespace-pre-line">
            {/* content included like this will be replaced with Strapi */}
            {textContent?.section_1?.text}
          </p>
        </div>
      </section>

      {/* about us */}
      <section id="2">
        {/* container, center and max width */}
        <div className="container mx-auto max-w-sm sm:max-w-2xl">
          {/* highlight 'casa' in green */}
          <HighlightCasa>
            {/* headings do not need css classes for responsive font sizing unless you want to override default */}
            <h1>{textContent?.section_2?.heading}</h1>
            <p className="whitespace-pre-line">
              {textContent?.section_2?.text}
            </p>
          </HighlightCasa>
        </div>
      </section>

      {/* offers */}
      <section id="3" className="mb-3 md:mb-5">
        <div className="container mx-auto max-w-sm sm:max-w-2xl">
          {/* center items vertically and horizontally */}
          <div className="flex flex-col items-center justify-center">
            <h2>{textContent?.section_3?.heading}</h2>
            {/* apply vertical margins outside of components */}
            <div className="mt-6 lg:mt-10">
              <FeatureImages />
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="4">
        <div className="container mx-auto max-w-sm sm:max-w-full md:max-w-2xl lg:max-w-5xl text-center">
          <h2>{textContent?.section_4?.heading}</h2>
          <div className="mt-6 sm:mt-8 lg:mt-15 lg:pt-2 text-left">
            <CenteredAccordion data={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
