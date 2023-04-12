/* eslint-disable no-nested-ternary */
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function Artikel() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const artikelData = [
    {
      category: 'Artikel',
      image: `${router.basePath}/assets/images/1.png`,
      date: '02 Mei 1995',
      title: 'judul 1',
      bg: 'bg-red-400',
    },
    {
      category: 'Visualisasi',
      image: `${router.basePath}/assets/images/2.png`,
      date: '02 Mei 1995',
      title: 'judul 2',
      bg: 'bg-green-100',
    },
    {
      category: 'Infografis',
      image: `${router.basePath}/assets/images/3.png`,
      date: '02 Mei 1995',
      title: 'judul 3',
      bg: 'bg-blue-400',
    },
    {
      category: 'Infografis',
      image: `${router.basePath}/assets/images/3.png`,
      date: '02 Mei 1995',
      title: 'judul 4',
      bg: 'bg-green-400',
    },
    {
      category: 'ABCS',
      image: `${router.basePath}/assets/images/3.png`,
      date: '02 Mei 1995',
      title: 'judul 5',
      bg: 'bg-yellow-400',
    },
    {
      category: 'terakhir',
      image: `${router.basePath}/assets/images/3.png`,
      date: '02 Mei 1995',
      title: 'judul 5',
      bg: 'bg-slate-400',
    },
  ];

  const dataLength = artikelData.length;

  const handlePrev = () => {
    setActiveIndex(
      activeIndex === 0
        ? dataLength - 3
        : activeIndex === 0
        ? dataLength - 2
        : activeIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex(
      activeIndex === dataLength - 1
        ? 0
        : activeIndex === dataLength - 2
        ? dataLength - 1
        : activeIndex === dataLength - 3
        ? 0
        : activeIndex + 1
    );
  };

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex flex-row justify-between">
        <div className="font-bold">Highlight</div>
        <div className="flex gap-2">
          <button
            className="rounded-full bg-gray-500 p-1.5 text-white"
            onClick={handlePrev}
          >
            <FiArrowLeft />
          </button>
          <button
            className="rounded-full bg-gray-500 p-1.5 text-white"
            onClick={handleNext}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="carousel-container">
        <div className="carousel-wrapper flex gap-3">
          {artikelData
            .slice(activeIndex, activeIndex + 3)
            .map((item, index) => (
              <div key={index} className="flex w-full flex-col gap-1">
                <div className="flex w-full flex-col gap-1">
                  <div
                    className={`h-[150px] max-h-[150px] rounded-md ${item.bg}`}
                  >
                    {' '}
                  </div>
                  <div className="text-base font-bold">{item.title}</div>
                  <div className="flex place-items-center gap-4">
                    <span className="rounded-md bg-yellow-400 px-3 py-1 text-xs font-bold">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#ACACAC]">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
