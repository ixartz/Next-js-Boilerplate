import Image from 'next/image';
import React from 'react';
import { WidthContainer } from '../components/WidthContainer';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';

export default function ScrollingThing({}) {
  return (
    <Main
      meta={
        <Meta
          title="Sam Stephenson"
          description="London-based digital product designer."
        />
      }
    >
      <WidthContainer>
        <div className="grid grid-cols-2 gap-8 mt-24">
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/samstephenson/image/upload/v1629196974/activitydetailpreview_botddo.png"
              alt="tst image"
              width="375"
              height="3253"
            />
            <div className="absolute top-[-32px] bottom-0 left-[-32px]">
              <DeviceFrame className="rounded-[28px] overflow-hidden h-[876px] w-[439px] border-2 border-red-600 sticky top-0" />
              {/* <div className="rounded-[28px] overflow-hidden h-[812px] w-[375px] border-2 border-red-600 sticky top-24"></div> */}
            </div>
          </div>
          <div className="">
            <AsideAnnotation yOffset="20" title="Activity tracking">
              At its heart, the app lets you track swims with your Apple Watch,
              and gives you reports back that help you understand and improve
              your swimming. We designed the activity tracking to be
              approachable enough for newbie swimmers, while retaining the
              details demanded by experienced swimmers.
            </AsideAnnotation>
            <AsideAnnotation yOffset="40" title="Stroke Insights">
              At its heart, the app lets you track swims with your Apple Watch,
              and gives you reports back that help you understand and improve
              your swimming. We designed the activity tracking to be
              approachable enough for newbie swimmers, while retaining the
              details demanded by experienced swimmers.
            </AsideAnnotation>
          </div>
        </div>
      </WidthContainer>
    </Main>
  );
}

export function AsideAnnotation({ title, children, yOffset }) {
  return (
    <div
      style={{
        top: yOffset + '%',
      }}
    >
      <p className="font-bold pl-24 mb-2">{title}. </p>
      <p className="relative pl-24 pt-2 border-t border-t-1">{children}</p>
    </div>
  );
}

function DeviceFrame({ className }) {
  return (
    <svg
      width="439"
      height="876"
      viewBox="0 0 439 876"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M439 0H0V881H439V0ZM36.6494 53.2828C32 62.0639 32 73.6426 32 96.8V779.2C32 802.357 32 813.936 36.6494 822.717C40.4014 829.804 46.1965 835.599 53.2828 839.351C62.0639 844 73.6426 844 96.8 844H342.2C365.357 844 376.936 844 385.717 839.351C392.803 835.599 398.599 829.804 402.351 822.717C407 813.936 407 802.357 407 779.2V96.8C407 73.6426 407 62.0639 402.351 53.2828C398.599 46.1965 392.803 40.4014 385.717 36.6494C376.936 32 365.357 32 342.2 32H96.8C73.6426 32 62.0639 32 53.2828 36.6494C46.1965 40.4014 40.4014 46.1965 36.6494 53.2828Z"
        fill="white"
      />
    </svg>
  );
}
