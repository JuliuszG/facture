import React from "react"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${ reset }
    box-sizing: border-box;
    @font-face {
        font-family: 'Butler';
        src: url('/fonts/Butler.woff2') format("woff2");
        font-style: normal;
        font-weight: 400;
        font-display: fallback;
    } 
    @font-face {
        font-family: 'Butler';
        src: url('/fonts/Butler-Light.woff2') format("woff2");
        font-style: normal;
        font-weight: 300;
        font-display: fallback;
    }   
    .no-font {
        font-family: serif;
        font-weight: 400;
        font-size: 3rem;
    }
    .butt {
        font-family: 'Butler';
        font-weight: 400;
        font-size: 3rem;
        &.light {
            font-weight: 300;
        }
    }
    .pop {
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 3rem;
    }
`

export function GlobalStyles ({ children }) {
    return (
        <GlobalStyle>
            { children }
        </GlobalStyle>
    )
}