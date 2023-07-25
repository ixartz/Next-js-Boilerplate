import React from 'react';

import Text from '../atoms/text';
import AddProduct from '../molecules/addProduct';

const TabSection = () => {
  return (
    <div className="mt-10 md:p-6">
      <div className="flex flex-wrap gap-4 md:gap-10 md:pl-[14px]">
        <Text bold size={3}>
          Feed
        </Text>
        <Text bold size={3} className="whitespace-nowrap underline">
          My Routine
        </Text>
        <Text className="whitespace-nowrap" bold size={3}>
          Skincare Shelf
        </Text>
      </div>
      <div>
        <div className="mb-8 mt-9">
          <Text bold size={2}>
            ☀️ Morning
          </Text>
        </div>
        <div>
          <AddProduct />
        </div>
      </div>
      <div>
        <div className="mb-8 mt-9">
          <Text bold size={2}>
            🌙 Night
          </Text>
        </div>
        <div>
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default TabSection;
