import Image from 'next/image';
import React from 'react';

import Pill from '../atoms/pills';
import Text from '../atoms/text';

const skins = ['Combination', 'Sensitive', 'Lines', 'Acne', 'Redness'];

const CardInfo = () => {
  return (
    <div className="w-full rounded-[28px] border border-[#D9D9D9] p-6 md:w-[438px]">
      <div className="relative h-[300px] w-full">
        <Image
          fill
          alt="cute"
          className="rounded-[28px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/a483/dc22/0ca4d0da3cb6676901e36eece18aa93d?Expires=1690761600&Signature=IgvrE0WKLM53sP8~csJ9XKV9H2zzQZ2nc9csOeOEgvfg3pF-XdtLiCNdgINniaNnJMdsx6edw2NgEg6yQVyZksaBUSu-gxXwcJ9MaXF-EiMNTnQN3PUDnh3N8ovxn592Lc-FRv3r9mspwVG3iDEpeYPu0zffDQRjosOO-6JiVxB5tdEDp~rppFEgU~qj1~KwMmRgXno9lHNxu4rCaYt1ooao5hCFtVaL59~D45sx3KzPon0FvHZnlkgyQJPiEJArfRNSxh34TGpK-egaw~0N0Fy1mDWi-cfsiVYeGNLr9yeaA1QGoEkxy6C5AqROEwfpDwwOyKT~SYfw5HRDs~UPyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
      <div className="mt-10">
        <Text size={2} bold>
          Jocelyn Culhane
        </Text>
        <div className="mb-6 mt-2">
          <Text size={3}>@ryry</Text>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <Text bold>Age: </Text>
            <Text>30-40</Text>
          </div>
          <div className="flex">
            <Text bold>Location: </Text>
            <Text>New-York, USA</Text>
          </div>
          <div className="flex">
            <Text bold>About me</Text>
          </div>
          <div className="flex">
            <Text>
              I'm a passionate individual with a love for exploring the wonders
              of life. Curiosity is my driving force, and I'm constantly seeking
              new experiences and knowledge that broaden my horizons. Whether
              it's diving into the depths of a gripping novel or embarking on an
              adventure in the great outdoors, I embrace every opportunity to
              learn and grow.
            </Text>
          </div>
          <div className="flex">
            <Text bold>My skin</Text>
          </div>
          <div className="flex flex-wrap gap-2">
            {skins.map((skin, i) => (
              <Pill key={i}>{skin}</Pill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
