import React from 'react';
import "fontsource-poppins"
import "fontsource-poppins/300.css"
import { GlobalStyles } from './src/components/globalStyles'
import { ProductContextProvider } from './src/context/productContext';

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    {element}
  </ProductContextProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);
