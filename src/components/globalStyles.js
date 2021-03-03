import React from "react"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${ reset }
    * {
        box-sizing: border-box;
    }
    @import url('https://fonts.cdnfonts.com/css/butler');
    
`

export function GlobalStyles ({ children }) {
    return (
        <GlobalStyle>
            { children }
        </GlobalStyle>
    )
}