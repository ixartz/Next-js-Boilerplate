import React from "react";
import styles from "./WidthContainer.module.css";

export const WidthContainer = ({
  children,
  size = "md",
  leftAligned = false,
  className = "",
  prose = false,
}): JSX.Element => {
  // Preset page sizes. Defaults to 'md'
  const sizes = {
    xs: "max-w-3xl",
    md: "max-w-screen-md",
    lg: "max-w-6xl",
    full: "max-w-none",
  };

  return (
    <div
      className={`${sizes[size]} ${
        leftAligned ? "mx-4 md:mx-8 lg:mx-16" : "mx-auto"
      } ${className} ${prose && styles.prose}`}
    >
      {children}
    </div>
  );
};
