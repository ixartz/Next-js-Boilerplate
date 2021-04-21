import React from 'react';

import { WidthContainer } from './WidthContainer';

export function PageIntro({ children }) {
  return (
    <WidthContainer className="pb-8 content">
      <h1 className="text-xl">{children}</h1>
    </WidthContainer>
  );
}
