/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import {
  AcademicCapIcon,
  BanknotesIcon,
  BeakerIcon,
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CubeIcon,
  EyeDropperIcon,
  GiftIcon,
  HeartIcon,
  KeyIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  WalletIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import {
  type MouseEventHandler,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import Slider from 'react-slick';

import type { IPantipData } from '../page';

const iconComponent = [
  BeakerIcon,
  AcademicCapIcon,
  BanknotesIcon,
  ChartBarIcon,
  CubeIcon,
  EyeDropperIcon,
  GiftIcon,
  HeartIcon,
  KeyIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  WalletIcon,
];

function SampleNextArrow({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/3 z-10 flex size-8 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
    >
      <ChevronRightIcon className="size-4" />
    </div>
  );
}

function SamplePrevArrow({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/3 z-10 flex size-8 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
    >
      <ChevronLeftIcon className="size-4" />
    </div>
  );
}

const getRandomIcon = (usedIcons: any): ReactNode => {
  const availableIcons = iconComponent.filter(
    (icon) => !usedIcons.includes(icon),
  );
  const randomIndex = Math.floor(Math.random() * availableIcons.length);
  return availableIcons[randomIndex] as ReactNode;
};

export default function Room({ data }: { data: IPantipData[] }) {
  const slider = useRef<any>(null);
  const [usedIcons, setUsedIcons] = useState([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow onClick={() => slider?.current?.slickNext()} />,
    prevArrow: <SamplePrevArrow onClick={() => slider?.current?.slickPrev()} />,
  };

  useEffect(() => {
    setUsedIcons([]);
  }, [data]);

  return (
    <div className="my-5 px-4 md:p-4">
      <div className="slider-container">
        <Slider {...settings} ref={slider}>
          {data.map((item: IPantipData, index: number) => {
            const RandomIcon: any = getRandomIcon(usedIcons);
            return (
              <div key={`${index}_${item.title}`}>
                <div className="flex h-24 items-center justify-center border border-white text-center text-gray-800 hover:cursor-pointer hover:rounded-xl hover:border hover:border-gray-300 hover:text-black  hover:shadow-sm">
                  <div>
                    <div className="flex w-full justify-center">
                      <RandomIcon className="size-5  " />
                    </div>
                    <p className="text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
