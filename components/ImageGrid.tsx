import React from "react";

export default function ImageGrid({ cols, children }) {
  return <div className="grid md:grid-cols-2 gap-4">{children}</div>;
}
