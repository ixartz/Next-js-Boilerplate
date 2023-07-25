import React from 'react';

import { IconPlus } from '../atoms/IconPlus';
import Text from '../atoms/text';

const AddProduct = () => {
  return (
    <div className="flex h-[144px] w-[428px] items-center gap-2 rounded-[28px] border border-dashed px-10 py-[46px]">
      <IconPlus />
      <Text dimmed size={3}>
        Add Product
      </Text>
    </div>
  );
};

export default AddProduct;
