import React from 'react';

import { Button, ButtonProps } from '../components/Button/Button';

const story = {
  title: 'Components/Button',
  component: Button,
};

export function RedButton(props: ButtonProps) {
  return <Button {...props}>Primary</Button>;
}
RedButton.args = {
  className: 'text-red-300',
};

export default story;
