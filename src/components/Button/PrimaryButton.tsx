import React from 'react';

import { Button, ButtonProps } from './Button';

export function PrimaryButton(props: ButtonProps) {
  return (
    <Button className="bg-blue-400 text-white" {...props}>
      Primary
    </Button>
  );
}
