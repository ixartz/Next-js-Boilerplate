import React from 'react';

import Text from '@/components/atoms/text';
import CardInfo from '@/components/organisms/cardInfo';
import Layout from '@/components/organisms/layout';
import TabSection from '@/components/organisms/tabSection';

const Index = () => {
  return (
    <div>
      <Layout>
        <div className="mb-[49px] px-10">
          <Text size={1} bold>
            My Routine
          </Text>
        </div>
        <div className="mb-14 h-[1px] w-full bg-[#D9D9D9]" />
        <div className="flex w-full flex-col px-10 md:flex-row">
          <CardInfo />
          <TabSection />
        </div>
      </Layout>
    </div>
  );
};

export default Index;
