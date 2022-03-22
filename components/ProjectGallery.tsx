import React from "react";

export const ProjectGallery = ({ children }): JSX.Element => {
  return (
    <div className={`lg:-mx-8 py-4`}>
      <h4 className="mx-4 mt-8 mb-2 text-sm tracking-wide uppercase md:mx-12 lg:mx-24">
        Featured projects
      </h4>
      <div className="grid w-full gap-4 px-4 my-8 overflow-x-auto  hideScrollbar md:grid-cols-2 lg:flex md:gap-8 md:px-12 lg:px-24">
        {children}
      </div>
    </div>
  );
};
