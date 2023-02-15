import { Box, Container, Flex } from '@mantine/core';
import type { FC, ReactNode } from 'react';

import { AppFooter } from './footer';
import { AppHeader } from './header';

type Props = {
  children: ReactNode;
};

export const AppLayoutWithHeader: FC<Props> = ({ children }) => {
  return (
    <Box className="min-h-screen">
      <Flex className="w-full justify-between">
        <div className="sticky top-1/2 z-20 w-screen">
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
      </Flex>

      <main className="min-h-screen bg-gray-100">
        <Container className="min-h-full" mx={{ md: 'auto', xs: 0 }}>
          {children}
        </Container>
      </main>
      <AppFooter />
    </Box>
  );
};
