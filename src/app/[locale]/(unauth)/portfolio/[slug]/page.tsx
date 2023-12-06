import type { Metadata } from 'next';

type IPortfolioDetailProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return Array.from(Array(6).keys()).map((elt) => ({
    slug: `${elt}`,
  }));
}

export function generateMetadata(props: IPortfolioDetailProps): Metadata {
  return {
    title: `Porfolio ${props.params.slug}`,
    description: `Porfolio ${props.params.slug} description`,
  };
}

const PortfolioDetail = (props: IPortfolioDetailProps) => (
  <>
    <h1 className="capitalize">Porfolio {props.params.slug}</h1>
    <p>
      Created a set of promotional materials and branding elements for a
      corporate event. Crafted a visually unified theme, encompassing a logo,
      posters, banners, and digital assets. Integrated the client&apos;s brand
      identity while infusing it with a contemporary and innovative approach.
      Garnered favorable responses from event attendees, resulting in a
      successful event with heightened participant engagement and increased
      brand visibility.
    </p>
  </>
);

export const dynamicParams = false;

export default PortfolioDetail;
