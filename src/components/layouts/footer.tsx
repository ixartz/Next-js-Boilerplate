import { Anchor, Container, Flex, Text } from '@mantine/core';
import type { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrandGithub, BrandInstagram, BrandTwitter } from 'tabler-icons-react';

import { LINKS } from '../constants/link';

export const AppFooter: FC = () => {
  return (
    <div className="sticky bottom-0 top-full w-full bg-[#323232] py-2">
      <Container mx={{ md: 'auto', xs: 0 }} className="flex justify-between">
        <Flex gap={12}>
          <Anchor
            variant="link"
            href={LINKS.TWITTER}
            target="_blank"
            rel="noopener"
          >
            <BrandTwitter className="text-white" />
          </Anchor>
          <Anchor
            variant="link"
            href={LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener"
          >
            <BrandInstagram className="text-white" />
          </Anchor>
          <Anchor
            variant="link"
            href={LINKS.GITHUB}
            target="_blank"
            rel="noopener"
          >
            <BrandGithub className="text-white" />
          </Anchor>
        </Flex>
        <Text color="white" size="sm">
          ©️miyazaki-seminar 2023
        </Text>
      </Container>
    </div>
  );
};
