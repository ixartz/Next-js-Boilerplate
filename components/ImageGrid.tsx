import React from 'react';

export default function ImageGrid({ cols, children, caption }) {
  return (
    <div className="my-16">
      <div
        className={`imageGrid grid md:grid-cols-2 lg:grid-cols-${
          cols || 2
        } gap-4 my-0`}
      >
        {children}
      </div>
      {caption && (
        <p className="text-center text-sm text-secondary">{caption}</p>
      )}
    </div>
  );
}
