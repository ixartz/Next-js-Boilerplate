import * as React from "react";

export function Button(props) {
  return (
    <div className="bg-surface-200 px-8 py-4 text-primary">{props.text}</div>
  );
}
