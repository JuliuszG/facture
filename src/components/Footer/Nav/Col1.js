import React from 'react';
import ColStyle from './style/ColStyle';
import TitleStyle from './style/TitleStyle';
import LiStyle from './style/LiStyle';

const Col1 = () => {
    return (
        <ColStyle margin = '106px 0 0 113px'>
            <TitleStyle>Company</TitleStyle>
            <ul>
                <LiStyle><a href="">About US</a></LiStyle>
                <LiStyle><a href="">Instalation</a></LiStyle>
                <LiStyle><a href="">Stories</a></LiStyle>
                <LiStyle><a href="">Trade</a></LiStyle>
            </ul>
        </ColStyle>
    )
}

export default Col1;