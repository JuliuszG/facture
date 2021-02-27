import React from "react"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${ reset }
    box-sizing: border-box;
    @import url('https://fonts.cdnfonts.com/css/butler');
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