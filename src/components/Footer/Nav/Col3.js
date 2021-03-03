import React from 'react';
import TitleStyle from './style/TitleStyle';
import LiStyle from './style/LiStyle';
import ColStyle from './style/ColStyle';

const Col3 = () => {
    return (
        <ColStyle margin = '106px 0 0 0' >
            <ul>
                <TitleStyle>Helpful Info</TitleStyle>
                <LiStyle><a href="">FAQ</a></LiStyle>
                <LiStyle><a href="">Returns</a></LiStyle>
                <LiStyle><a href="">Shipping</a></LiStyle>
                <LiStyle><a href="">Contact Us</a></LiStyle>
            </ul>
        </ColStyle>

    )
}

export default Col3;