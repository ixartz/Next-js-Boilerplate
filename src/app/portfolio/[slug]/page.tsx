import type { Metadata } from 'next';

import { Main } from '@/templates/Main';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Porfolio ${slug}`,
  };
}

const PortfolioDetail = ({ params }: Props) => (
  <Main>
    <h1 className="capitalize">Porfolio {params.slug}</h1>
    <p>
      Designed a series of promotional materials and branding assets for a
      corporate event. Developed a visually cohesive theme, including a logo,
      posters, banners, and digital assets. Incorporated the client&apos;s brand
      identity while adding a fresh and modern touch. Received positive feedback
      from event attendees and contributed to a successful event with increased
      attendee participation and brand recognition.
    </p>
  </Main>
);

export default PortfolioDetail;
