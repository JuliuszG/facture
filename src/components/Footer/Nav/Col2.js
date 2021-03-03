import React from 'React';
import TitleStyle from './style/TitleStyle';
import LiStyle from './style/LiStyle';
import ColStyle from './style/ColStyle';

const Col2 = () => {
    return (
        <ColStyle margin = '106px 0 0 0' >
            <TitleStyle>Shop</TitleStyle>
            <ul>
                <LiStyle><a href="">Table</a></LiStyle>
                <LiStyle><a href="">Side Table</a></LiStyle>
                <LiStyle><a href="">Wali</a></LiStyle>
                <LiStyle><a href="">Sitting</a></LiStyle>
            </ul>
        </ColStyle>
    )
}

export default Col2; 