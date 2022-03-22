import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { WidthContainer } from "../components/WidthContainer";

import MuseVideoPlayer from "../components/MuseVideoPlayer";
import { useRouter } from "next/router";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps, leftAligned = false) => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full min-h-screen p-2 py-8 antialiased sm:p-4 bg-surface text-primary md:p-8 md:py-16">
      {props.meta}
      {router.query.video && <MuseVideoPlayer />}
      <WidthContainer leftAligned={leftAligned} className="z-10">
        <Navigation />
      </WidthContainer>
      <div className="z-10 mt-12">{props.children}</div>
      <div className="flex-grow" />
      <Footer className="z-10" />
    </div>
  );
};

export { Main };
