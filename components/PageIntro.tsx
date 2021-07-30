import React from 'react';
import { WidthContainer } from './WidthContainer';

export function PageIntro({ children }) {
  return (
    <WidthContainer className="pb-8 content">
      <h1 className="text-4xl leading-tight">{children}</h1>
    </WidthContainer>
  );
}
