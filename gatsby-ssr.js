import React from 'react';
import { GlobalStyles } from './src/components/globalStyles'

export const wrapRootElement = ({ element }) => (
  <>
  {element}
  </>
);

export const wrapPageElement = ({ element }) => (
    <>
      <GlobalStyles />
      {element}
    </>
);