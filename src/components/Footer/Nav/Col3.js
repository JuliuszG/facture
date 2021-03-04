import React from 'react';
import { Link } from 'gatsby';
import TitleStyle from './style/TitleStyle';
import LiStyle from './style/LiStyle';
import ColStyle from './style/ColStyle';

const Col3 = () => {
    return (
        <ColStyle margin = '106px 0 0 0' >
            <ul>
                <TitleStyle>Helpful Info</TitleStyle>
                <LiStyle> <Link to='/faq' >FAQ</Link> </LiStyle>
                <LiStyle> <Link to='/returns' >Returns</Link> </LiStyle>
                <LiStyle> <Link to='/shipping' >Shipping</Link> </LiStyle>
                <LiStyle> <Link to='/contactUs' >Contact Us</Link> </LiStyle>
            </ul>
        </ColStyle>

    )
}

export default Col3;