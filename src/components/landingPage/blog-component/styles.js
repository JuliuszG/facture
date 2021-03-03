import styled from 'styled-components'
import { motion } from 'framer-motion'

export const BlogLandingWrapper = styled.section`
    display: flex;
    align-items: center;
    padding-left: 11.45%;
    height: 100vh;
    width: 100%;
    background: #6C7F7E;
    @media( max-width: 1150px) {
        flex-direction: column-reverse;
        padding: 10% 0;
        height: auto;
    }
    @media( max-width: 1024px) {
        font-size: 14px;
    }
    @media( max-width: 350px) {
        font-size: 12px;
    }
    .content {
        width: 23.61%;
        margin-right: 10%;
        @media( max-width: 1150px) {
            margin-right: 0;
            width: 82.56%;
        }
        .small, p {
        font-size: 0.875em;
        font-family: "Poppins", sans-serif;
        color: #fff;
        text-align: left;
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
                    background: #fff;
                    height: 1px;
                    margin-right: 12px;
                    margin-bottom: 0.25em;
                }
            }
        }
        p {
            font-weight: 400;
            line-height: 178.57%;
        }
        h2 {
            font-size: 3.75em;
            line-height: 120%;
            font-family: "Butler", serif;
            font-weight: 300;
            color: #fff;
            margin: 23px 0 10px;
        }
        a {
            border: 1px solid #fff;
            background: #FFFFFF26;
            padding: 10px 30px 12px;
            cursor: pointer;
            transition: all 0.3s ease-in;
            display: inline-block;
            @media (max-width: 1024px) {
                margin-bottom: 10%;
            }
            color: #fff;
            text-decoration: none;
            font-family: "Poppins", sans-serif;
            font-weight: 300;
            font-size: 1em;
            text-transform: uppercase;
            margin-top: 40px;
            span{
                margin-left: 32px;
            }
            &:hover {
                background: #fff;
                color: #191919;
            }
        }
    }
`
export const BlogImageWrapper = styled.div`
    width: 62.56%;
    height: 47.44%;
    @media( max-width: 1150px) {
    margin: 10% 0 20%;
        width: 82.56%;
        height: auto;
    }
`