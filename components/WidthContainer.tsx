import React from 'react';

export function WidthContainer({ children, size, className }) {
  // Preset page sizes. Defaults to 'md'
  const sizes = {
    md: 'max-w-screen-md',
    lg: 'max-w-6xl',
  };

  return (
    <div className={`w-full ${size ? sizes[size] : sizes.md} mx-auto ${className || ''}`}>
      {children}
    </div>
  );
}
