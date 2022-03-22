import React from "react";
import { WidthContainer } from "./WidthContainer";

export function PageIntro({ children, small = false }) {
  return (
    <WidthContainer className="pb-8 content" leftAligned>
      {small ? (
        children
      ) : (
        <h1 className="text-4xl font-bold leading-tight">{children}</h1>
      )}
    </WidthContainer>
  );
}
