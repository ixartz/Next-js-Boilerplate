import React from 'react';

interface Props {
  children: React.ReactNode;
  size?: 1 | 2 | 3 | 4;
  bold?: boolean;
  className?: string;
  dimmed?: boolean;
}

const Text = ({ children, size, bold, className, dimmed }: Props) => {
  return (
    <p
      className={`m-0 ${
        size === 1
          ? 'text-4xl md:text-6xl'
          : size === 2
          ? 'text-3xl md:text-[40px]'
          : size === 3
          ? 'text-2xl'
          : 'text-base'
      } ${bold && '!font-bold'} font-light ${
        dimmed && 'text-[#D9D9D9]'
      } ${className} `}
    >
      {children}
    </p>
  );
};

export default Text;
