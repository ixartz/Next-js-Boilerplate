import React, { useState } from 'react';

import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { WidthContainer } from '../components/WidthContainer';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { getCloudinary } from '../utils/cloudinary';

export async function getStaticProps() {
  const allPhotos = await getCloudinary();
  return {
    props: {
      allPhotos,
      revalidate: 1,
    },
  };
}

export default function Index({ allPhotos }) {
  const emptyModal = {
    src: null,
    width: 100,
    height: 100,
    title: null,
  };
  const [currentImage, setCurrentImage] = useState(emptyModal);
  const setImage = (s, w, h, c) => {
    setCurrentImage({
      src: s,
      width: w,
      height: h,
      caption: c,
    });
  };

  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <WidthContainer size="lg">
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry columnsCount={3} gutter={4}>
            {allPhotos.map((image) => (
              <div
                key={image.asset_id}
                role="img"
                onClick={() => setImage(image.secure_url, image.width, image.height, image.filename)}
              >
                <Image
                  src={image.secure_url}
                  width={image.width}
                  height={image.height}
                  alt={image.filename}
                  layout="responsive"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </WidthContainer>
      {currentImage.src && (
        <div
          className="fixed flex items-center justify-center inset-0 z-0 backdrop-filter backdrop-blur"
          onClick={() => setCurrentImage(emptyModal)}
          style={{ background: 'rgba(0, 0, 0, 0.8)' }}
        >
          <div className="z-50 w-screen max-w-6xl p-8" role="img">
            <Image
              src={currentImage.src}
              width={currentImage.width}
              height={currentImage.height}
              alt={currentImage.caption}
              layout="responsive"
            />
            <p className="pt-2 md:w-1/2">{currentImage.caption}</p>
          </div>
        </div>
      )}
    </Main>
  );
}
