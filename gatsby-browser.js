import React from 'react';
import "fontsource-poppins"
import "fontsource-poppins/300.css"
import { GlobalStyles } from './src/components/globalStyles';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';

export const wrapRootElement = ({ element }) => (
  <>
  {element}
  </>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Header/>
    {element}
    <Footer /> 
  </>
);
