import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="AppTapBoom" description="AppTapBoom Home" />}>
      <div className="static w-full overflow-visible">
        <div>
          <img
            className="h-fit w-full"
            src={`${router.basePath}/assets/images/home.png`}
          />
        </div>
        <div className="absolute -bottom-40 left-1/2 flex -translate-x-1/2 items-center justify-center">
          <Link className="relative m-1 w-80 border-none" href="/about">
            <img
              src={`${router.basePath}/assets/images/home-button-left.png`}
            />
            <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-black">
              ABOUT US
            </h1>
          </Link>
          <Link className="relative m-1 w-80 border-none" href="/news">
            <img
              src={`${router.basePath}/assets/images/home-button-center.png`}
            />
            <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-black">
              NEWS
            </h1>
          </Link>
          <Link className="relative m-1 w-80 border-none" href="/store">
            <img
              src={`${router.basePath}/assets/images/home-button-right.png`}
            />
            <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl leading-4 text-black">
              STORE
            </h1>
          </Link>
        </div>
        <div className="my-40 mx-auto max-w-screen-lg items-center justify-center ">
          <h1 className="mb-16 border-2 border-x-0 border-t-0 border-b-black p-5 text-center text-4xl text-pink-600">
            WELCOME
          </h1>
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
            Download the experience everybody is talking about. We guarantee
            this immersive platform will offer an acousitc and visual experience
            that you'll remember. We encourage you to share your meaningful.
          </p>
        </div>
      </div>
    </Main>
  );
};

export default Index;
