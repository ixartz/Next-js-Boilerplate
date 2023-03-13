import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => {
  const router = useRouter();
  return (
    <Main meta={<Meta title="News" description="News" />}>
      <div className="sticky w-full overflow-visible">
        <div>
          <img
            className="h-fit w-full"
            src={`${router.basePath}/assets/images/about.png`}
          />
        </div>
        <div className="absolute -bottom-16 left-0 mx-40 flex w-1/5 items-center justify-center">
          <img src={`${router.basePath}/assets/images/news_title.png`} />
        </div>
        <div className="absolute -bottom-60 right-0 -mx-10 flex w-1/3 items-center justify-center">
          <img src={`${router.basePath}/assets/images/handphone.png`} />
        </div>
      </div>
      <div className="mx-auto mt-40 max-w-screen-lg items-center justify-center">
        <div className="my-5 flex justify-between">
          <img
            src={`${router.basePath}/assets/images/woman.png`}
            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12"
          />
          <div className="text-md mx-7">
            <p>Download the experience everybody is talking about.</p>
            <p>
              We guarantee this immersive platform will offer an acoustic and
              visual experience that you'll remember.
            </p>
            <p>
              We encourage you to share your meaningful creations to gain
              followers and inspire others in our community of like minded
              content appreciators and creators.
            </p>
            <p>Feel the music, Play the Game.</p>
          </div>
        </div>
        <p>
          Download the experience everybody is talking about. We guarantee this
          immersive platform will offer an acousitc and visual experience that
          you'll remember. We encourage you to share your meaningful realtions
          to gail followers and inspire others in our community of like minded
          content appreciators and creators. Feel the Music, Play the Game.
        </p>
        <div className="mt-20 flex justify-between">
          <Link
            className="w-32 rounded border-4 border border-teal-700 bg-gradient-to-t from-teal-600 to-teal-500 p-2 text-center text-xl text-white hover:border-4 hover:border-teal-400"
            href="/auth/signIn"
          >
            PREVIOUS
          </Link>
          <Link
            href="/"
            className="rounded border border-4 border-gray-400 bg-gradient-to-t from-gray-400 to-gray-100 py-2 px-10 text-xl text-gray-700 hover:border-4 hover:border-gray-700 "
          >
            BACK TO HOME
          </Link>
          <Link
            className="w-32 rounded border-4 border border-teal-700 bg-gradient-to-t from-teal-600 to-teal-500 p-2 text-center text-xl text-white hover:border-4 hover:border-teal-400"
            href="/auth/signIn"
          >
            NEXT
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default About;
