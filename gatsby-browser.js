import React from 'react';
import "fontsource-poppins"
import "fontsource-poppins/300.css"
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
