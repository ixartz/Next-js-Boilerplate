import { Box, Center, Container, Text } from '@mantine/core';
import type { FC, ReactNode } from 'react';

import { AppFooter } from './footer';
import { AppHeader } from './header';

type Props = {
  children: ReactNode;
};

export const TopPageNonHeaderLayout: FC<Props> = ({ children }) => {
  return (
    <Box className="min-h-screen bg-gray-50">
      <div className="min-h-max">
        背景に動く系の画像を入れる
        <Center className="h-[98vh]">
          <Text weight={800} size="xl" className="font-sans">
            それって当たり前ですか？
          </Text>
        </Center>
      </div>
      <div className="sticky top-0 z-20 w-full">
        <AppHeader
          links={[
            {
              link: '/',
              label: 'テーマ',
            },
            {
              link: '/',
              label: 'カテゴリ別の結論',
            },
            {
              link: '/',
              label: '結論',
            },
            {
              link: '/',
              label: '考察',
            },
          ]}
        />
      </div>
      <main className="min-h-screen">
        <Container className="min-h-full pt-6" mx={{ md: 'auto', xs: 0 }}>
          {children}
        </Container>
      </main>
      <AppFooter />
    </Box>
  );
};
