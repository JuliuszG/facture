import React from 'react';
import { Link } from 'gatsby'; 
import ColStyle from './style/ColStyle';
import TitleStyle from './style/TitleStyle';
import LiStyle from './style/LiStyle';

const Col1 = () => {
    return (
        <ColStyle margin = '106px 0 0 113px'>
            <TitleStyle>Company</TitleStyle>
            <ul>
                <LiStyle> <Link to='/About'>About US</Link> </LiStyle>
                <LiStyle> <Link to='/' >Instalation</Link> </LiStyle>
                <LiStyle> <Link to='/' >Stories</Link> </LiStyle>
                <LiStyle> <Link to='' >Trade</Link> </LiStyle>
            </ul>
        </ColStyle>
    )
}

export default Col1;