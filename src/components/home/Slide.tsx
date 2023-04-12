import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Slide() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const CarouselData = [
    {
      alt: '1',
      image: `${router.basePath}/assets/images/1.png`,
    },
    {
      alt: '2',
      image: `${router.basePath}/assets/images/2.png`,
    },
    {
      alt: '3',
      image: `${router.basePath}/assets/images/3.png`,
    },
    {
      alt: '4',
      image: `${router.basePath}/assets/images/4.png`,
    },
  ];

  const handleNext = () => {
    setActiveIndex(
      activeIndex === CarouselData.length - 1 ? 0 : activeIndex + 1
    );
  };

  // const handlePrev = () => {
  //   setActiveIndex(
  //     activeIndex === 0 ? CarouselData.length - 1 : activeIndex - 1
  //   );
  // };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <>
      <div className="w-full">
        <div className="text-base font-bold text-[#fa65b1]">
          PORTAL SATU DATA
        </div>
        <div className="text-[38px] font-bold text-[#2a2a2a]">
          Pemerintah Kabupaten Garut
        </div>
        <div className="pb-2 text-sm">
          Oleh Dinas Komunikasi dan Informatika
        </div>
        <div className="relative pt-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search"
            className="block w-full rounded-lg border border-gray-500 bg-gray-50 p-1.5 pl-10 text-sm text-gray-900 focus:outline-[#fa65b1]"
            placeholder="Cari Data Disini ..."
          />
        </div>

        <p className="text-sm">
          Satu Data Garut adalah portal terintegrasi untuk pengelolaan,
          keterbukaan, dan kemudahan akses data bagi warga dan pemerintah
          Kabupaten Garut.
        </p>
      </div>
      <div className="relative h-full w-full">
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="flex h-full w-full transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {CarouselData.map((item, index) => (
              <div key={index} className="h-full w-full flex-none">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={100}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
