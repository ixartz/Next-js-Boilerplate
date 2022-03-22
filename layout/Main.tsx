import React, { ReactNode, useContext } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { WidthContainer } from "../components/WidthContainer";
import { PageContext } from "../components/contexts/PageContext";
import MuseVideoPlayer from "../components/MuseVideoPlayer";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps, leftAligned = false) => {
  const { useBackgroundVideo } = useContext(PageContext);
  return (
    <PageContext.Provider
      value={{
        useBackgroundVideo: true,
      }}
    >
      <div className="flex flex-col w-full min-h-screen p-4 py-8 antialiased bg-surface text-primary md:p-8 md:py-16">
        {props.meta}
        {useBackgroundVideo && <MuseVideoPlayer />}
        <WidthContainer leftAligned={leftAligned} className="z-10">
          <Navigation />
        </WidthContainer>
        <div className="z-10 mt-12">{props.children}</div>
        <div className="flex-grow" />
        <Footer className="z-10" />
      </div>
    </PageContext.Provider>
  );
};

export { Main };
