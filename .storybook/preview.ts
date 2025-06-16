import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // Enable App Router support
    },
    docs: {
      toc: true, // Enable table of contents
    },
    a11y: {
      test: 'todo', // Make a11y tests optional
    },
  },
  tags: ['autodocs'],
};

export default preview;
