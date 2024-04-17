import { motion, useMotionValue } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import useScreenSize from '@/utils/screenSize';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 9999;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Images = ({ imgIndex, imgs, hrefs }: any) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            onClick={() => window.open(hrefs[idx], '_blank')}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[300px] shrink-0 rounded-xl bg-neutral-800 object-cover md:w-[380px]"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex, imgs }: any) => {
  const screenSize = useScreenSize();

  let slideCount = 2;

  if (screenSize === 'sm' || screenSize === 'xs') {
    slideCount = 5;
  }

  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.slice(0, slideCount).map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`size-3 rounded-full transition-colors ${
              idx === imgIndex ? 'bg-secondary-600' : 'bg-primary-950'
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[10vw] max-w-[100px]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[10vw] max-w-[100px]" />
    </>
  );
};

export const HorizontalScroll = ({
  imgs,
  hrefs,
}: {
  imgs: string[];
  hrefs: string[];
}) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-primary-50 py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} imgs={imgs} hrefs={hrefs} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />
      <GradientEdges />
    </div>
  );
};
