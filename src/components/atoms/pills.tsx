import React from 'react';

import Text from './text';

interface Prop {
  children: React.ReactNode;
}

const Pill = ({ children }: Prop) => {
  return (
    <div className="rounded-[32px] border px-[18px] py-3">
      <Text>{children}</Text>
    </div>
  );
};

export default Pill;
