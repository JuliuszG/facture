import React from 'react';
import { Link } from 'gatsby';
import TitleStyle from './style/TitleStyle';
import LiStyle from './style/LiStyle';
import ColStyle from './style/ColStyle';

const Col2 = () => {
    return (
        <ColStyle margin = '106px 0 0 0' >
            <TitleStyle>Shop</TitleStyle>
            <ul>
                <LiStyle> <Link to='/tabke' >Table</Link> </LiStyle>
                <LiStyle> <Link to='/side table' >Side Table</Link> </LiStyle>
                <LiStyle> <Link to='/wall' >Wall</Link> </LiStyle>
                <LiStyle> <Link to='/sitting' >Sitting</Link> </LiStyle>
            </ul>
        </ColStyle>
    )
}

export default Col2; 