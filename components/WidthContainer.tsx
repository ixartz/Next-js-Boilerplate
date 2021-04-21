import React from 'react';

export function WidthContainer({ children, size, className }) {
  const sizes = {
    md: 'max-w-screen-md',
    lg: 'max-w-6xl',
  };

  return (
    <div className={`w-full ${size ? sizes[size] : sizes.md} mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
