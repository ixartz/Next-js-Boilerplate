import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { Main } from './Main';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Main> = {
  title: 'Example/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Main>;

export const MainWithReactComponent: Story = {
  args: {
    children: <div>Children node</div>,
  },
};

export const MainWithString: Story = {
  args: {
    children: 'String',
  },
};

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const MainWithHomeLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('link', {
      name: /Home/i,
    });

    await userEvent.click(loginButton);
  },
};
