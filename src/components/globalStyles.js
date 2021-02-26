import React from "react"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${ reset }
    box-sizing: border-box;
    h1 {
        color: red;
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