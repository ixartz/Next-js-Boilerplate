import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Main } from '@/templates/Main';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my portfolio page!',
};

const Portfolio = () => (
  <Main>
    <p>
      Welcome to my portfolio page! Here you will find a carefully curated
      collection of my work and accomplishments. Through this portfolio,
      I&apos;m to showcase my expertise, creativity, and the value I can bring
      to your projects.
    </p>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {Array.from(Array(6).keys()).map((elt) => (
        <Link className="border-none" key={elt} href={`/portfolio/${elt}`}>
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-28 w-full">
              <Image
                src="/assets/images/nextjs-starter-banner.png"
                alt="Portfolio project"
                fill
              />
            </div>

            <div className="bg-blue-200 p-3 text-xl font-bold">
              Portfolio {elt}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </Main>
);

export default Portfolio;
