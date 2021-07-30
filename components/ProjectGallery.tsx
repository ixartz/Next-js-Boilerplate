import React from 'react';

export const ProjectGallery = ({
  children,
  size = 'md',
  leftAligned = false,
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
    <div className={`lg:-mx-8 py-4`}>
      <h4 className="mx-4 md:mx-12 lg:mx-24 mt-8 uppercase text-sm mb-2 tracking-wide">
        Featured projects
      </h4>
      <div
        className="
        hideScrollbar 
        w-full 
        overflow-x-auto 
        grid 
        md:grid-cols-2 
        lg:flex 
        gap-4 
        md:gap-8 
        my-8 
        px-4 
        md:px-12 
        lg:px-24"
      >
        {children}
      </div>
    </div>
  );
};
