import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  );
};
