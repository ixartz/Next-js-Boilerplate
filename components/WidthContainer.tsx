import React from "react";

export function WidthContainer({
  children,
  size = "md",
  className = "",
}): JSX.Element {
  // Preset page sizes. Defaults to 'md'
  const sizes = {
    md: "max-w-screen-md",
    lg: "max-w-6xl",
  };

  return (
    <div className={`w-full ${sizes[size]} mx-auto ${className}`}>
      {children}
    </div>
  );
}
