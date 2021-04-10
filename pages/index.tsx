import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

export default function Index() {
  return (
    <Main
      meta={<Meta title="Sam Stephenson" description="London-based digital product designer" />}
    >
      <h1>Research-driven design for digital products</h1>
    </Main>
  );
}
