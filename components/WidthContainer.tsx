import React from 'react';
import styles from './WidthContainer.module.css';


export const WidthContainer = ({
  children,
  size = 'md',
  className = '',
  prose = false,
}): JSX.Element => {
  // Preset page sizes. Defaults to 'md'
  const sizes = {
    xs: 'max-w-3xl',
    md: 'max-w-screen-md',
    lg: 'max-w-6xl',
  };

  return (
    <div
      className={`w-full ${sizes[size]} mx-auto ${className} ${
        prose && styles.prose
      }`}
    >
      {children}
    </div>
  );
};
