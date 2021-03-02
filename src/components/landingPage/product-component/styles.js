import styled from 'styled-components'
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
        &.decoration {
            &::before {
                content: "";
                display: inline-block;
                width: 2.5em;
                background: ${ ({ themeColor }) => themeColor === 'light' ? '#fff' : '#191919' };;
                height: 1px;
                margin-right: 12px;
                margin-bottom: 0.25em;
            }
        }
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
        max-width: ${ ({ titleSize }) => titleSize && titleSize };
    }
    a {
        border: 1px solid ${ ({ themeColor }) => themeColor === 'light' ? '#fff' : '#191919' };
        background: ${ ({ themeColor }) => themeColor === 'light' ? '#FFFFFF26' : 'transparent' };
        padding: 10px 30px 12px;
        cursor: pointer;
        transition: all 0.3s ease-in;
        display: inline-block;
        @media (max-width: 1024px) {
            margin-bottom: 10%;
        }
        color: ${ ({ themeColor }) => themeColor === 'light' ? '#fff' : '#191919' };
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-size: 1em;
        text-transform: uppercase;
        span{
            margin-left: 32px;
        }
        &:hover {
            background: ${ ({ themeColor }) => themeColor === 'light' ? '#FFFFFF' : '#191919' };
            color: ${ ({ themeColor }) => themeColor === 'light' ? '#191919' : '#FFFFFF' };
        }
    }
`

export const ProductImage = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
export const LeftImage = styled.div`
    position: absolute;
    bottom: 7.77%;
    left: 6.94%;
    height: 38.88%;
    width: 19.79%;
    @media (max-width: 968px){
        height: 33.88%;
        width: 45%;
    }
`

export const RightImage = styled.div`
    position: absolute;
    top: 7.77%;
    right: 6.94%;
    height: 52.77%;
    width: 30.90%;
    @media (max-width: 968px){
        height: 33.88%;
        width: 45%;
    }
`