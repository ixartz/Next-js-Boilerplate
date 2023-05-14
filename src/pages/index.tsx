import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="mb-8 flex flex-row items-center justify-between">
        <div className="ml-16">
          <h3 className="font-avenir text-6.5xl">Hi, I{`'`}m Chris!</h3>
          <p className="mt-2 font-avenir text-xl">
            I{`'`}m passionate about
            <ul className="mt-0 list-inside list-disc">
              <li className="my-1 ml-4">startups</li>
              <li className="my-1 ml-4">coding</li>
              <li className="my-1 ml-4">foreign policy</li>
              <li className="my-1 ml-4">travel</li>
              <li className="my-1 ml-4">fitness</li>
              <li className="my-1 ml-4">and plenty of other niche topics!</li>
            </ul>
          </p>
        </div>
        <div className="mr-16 max-w-xs">
          <img
            src={`${router.basePath}/assets/images/chrisozgo1.png`}
            alt="Chris Ozgo smiling candidly in Los Angeles"
          />
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <div>
          <Link href="/about/">
            <button
              type="button"
              className="rounded-3xl bg-black px-4 py-2 font-raleway font-bold text-white hover:bg-blue-700"
            >
              About
            </button>
          </Link>
        </div>
        <div>
          <Link href="/blog/">
            <button
              type="button"
              className="rounded-3xl bg-black px-4 py-2 font-raleway font-bold text-white hover:bg-blue-700"
            >
              Blog
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-6 border-b border-black" />
      <div className="flex">
        <div>
          <img
            src={`${router.basePath}/assets/images/chrisozgo2.png`}
            alt="Chris Ozgo at Zion National Park"
          />
        </div>
        <div className="my-12 ml-[-50px] max-w-md bg-gray-200">
          <p>
            <p>In the past few years I:</p>
            <ul className="mt-0 list-inside list-disc">
              <li className="my-1 ml-4">
                Co-founded{' '}
                <a
                  href="https://seedgatech.wixsite.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEED
                </a>{' '}
                and{' '}
                <a
                  href="https://www.instagram.com/gtseekdiscomfort/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seek Discomfort Club
                </a>
              </li>
              <li className="my-1 ml-4">
                Broke the Guinness World Record for the{' '}
                <a
                  href="https://linktr.ee/seedgt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Longest Hopscotch Game
                </a>
              </li>
              <li className="my-1 ml-4">
                <a href="https://chrisozgo.substack.com/">
                  Solo traveled on 4 different continents
                </a>
              </li>
              <li className="my-1 ml-4">
                Gave the{' '}
                <a
                  href="https://www.youtube.com/watch?v=IRyCNIOo_Po"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  keynote speech
                </a>{' '}
                to Georgia Tech{`'`}s freshman class
              </li>
              <li className="my-1 ml-4">
                Played college basketball in Singapore and led the country in
                scoring
              </li>
              <li className="my-1 ml-4">
                Completed 4 marathons, 2 half-Ironmans and 1 Ironman
              </li>
              <li className="my-1 ml-4">
                Built a{' '}
                <a
                  href="https://linktr.ee/chrisozgoapps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  few mobile apps
                </a>
                that made some money
              </li>
              <li className="my-1 ml-4">
                Worked for some{' '}
                <a
                  href="https://linktr.ee/chrisozgostartups"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kickass startups
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </Main>
  );
};

export default Index;
