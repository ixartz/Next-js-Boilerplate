import { Badge, Box, Space } from '@mantine/core';
import type { FC } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const BoxWithTitle: FC<Props> = ({ title, children }) => {
  return (
    <Box my={8}>
      <Badge
        size="xl"
        color="blue.4"
        variant="filled"
        radius={1}
        sx={{
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        {title}
      </Badge>
      <Space h="xl" />
      <Box my={4} p={8} bg="white">
        {children}
      </Box>
    </Box>
  );
};
