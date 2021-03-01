import styled from 'styled-components'
import Image from 'gatsby-image'
import { motion } from 'framer-motion'

export const ProductComponentWrapper = styled.div`
    padding: ${ ({ alignment }) => alignment === 'bottom' ? '3%' : 0 };
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${ ({ height }) => height === 'small' ? '60vh' : '100vh' };
    align-items: ${ ({ alignment }) => alignment === 'bottom' ? 'flex-end' : 'center' };
    font-size: 16px;
    text-align: center;
    overflow: hidden;
    @media (max-width: 1024px) and (max-height: 1024px ) {
        font-size: 14px;
        padding: 0 10%;
        height: 100vh;
    }
    @media (max-width: 450px) {
        font-size: 12px;
        padding: 0 10%;
    }
    .content {
        z-index: 10;
    }
    .small, p {
        font-size: 0.875em;
        font-family: "Poppins", sans-serif;
        color: ${ ({ themeColor }) => themeColor === 'light' ? '#fff' : '#191919' };
    }
    .small {
        font-weight: 300;
        text-transform: uppercase;
        line-height: 150%;
    }
    p {
        font-weight: 400;
        line-height: 178.57%;
        margin-bottom: 40px;
    }
    h2 {
        font-size: 3.75em;
        line-height: 120%;
        font-family: "Butler", serif;
        font-weight: 300;
        color: ${ ({ themeColor }) => themeColor === 'light' ? '#fff' : '#191919' };
        margin: 23px 0 10px;
    }
`

export const ProductImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const ButtonLink = styled(motion.div)`
    border: 1px solid ${ ({ themeColor }) => themeColor === 'light' ? '#fff' : '#191919' };
    background: ${ ({ themeColor }) => themeColor === 'light' ? '#FFFFFF26' : 'transparent' };
    padding: 10px 30px 12px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    display: inline-block;
    @media (max-width: 1024px) {
        margin-bottom: 10%;
    }
    a {
        color: ${ ({ themeColor }) => themeColor === 'light' ? '#fff' : '#191919' };
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-size: 1em;
        text-transform: uppercase;
        width: 100%;
        height: 100%;
        z-index: 666;
        span{
            margin-left: 32px;
        }
    }
    &:hover {
        background: ${ ({ themeColor }) => themeColor === 'light' ? '#FFFFFF' : '#191919' };
        a {
            color: ${ ({ themeColor }) => themeColor === 'light' ? '#191919' : '#FFFFFF' };
        }
    }
`