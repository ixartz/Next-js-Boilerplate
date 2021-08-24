import React from 'react';

export default function List({ children, title, className }) {
  return (
    <ul
      className={`flex flex-col max-w-2xl h-screen overflow-y-scroll ${className}`}
    >
      <h4 className="uppercase text-sm mb-2 tracking-wide px-4 text-secondary">
        {title}
      </h4>
      {children}
    </ul>
  );
}
