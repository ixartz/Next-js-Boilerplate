import type { Metadata } from 'next';
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

    <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {Array.from(Array(6).keys()).map((elt) => (
        <div key={elt}>
          <div className="overflow-hidden rounded-lg">
            <div className="relative overflow-hidden pb-60">
              <Link href={`/portfolio/${elt}`}>
                <img
                  className="absolute h-full w-full object-cover object-center"
                  src="/assets/images/nextjs-starter-banner.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="relative bg-blue-200">
              <div className="p-3">
                <Link href={`/portfolio/${elt}`}>
                  <h3 className="text-xl font-bold">Portfolio {elt}</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Main>
);

export default Portfolio;
