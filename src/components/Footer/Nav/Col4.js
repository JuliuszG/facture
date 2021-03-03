import React from 'react';
import { Link } from 'gatsby';
import TitleStyle from './style/TitleStyle';
import LiStyle from './style/LiStyle';
import ColStyle from './style/ColStyle';
import SocialImgStyle from './style/SocialImgStyle';
import FbImg from './style/FbImg';
import InstImg from './style/InstImg';
import TwitImg from './style/TwitImg';
import PintImg from './style/PintImg';

 const Col4 = () => {
     return (
         <ColStyle margin = '106px 0 0 0'>
             <TitleStyle>Connect</TitleStyle>
             <ul>
                 <LiStyle> <Link to='/e-mail' >@facture_studio</Link> </LiStyle>
             </ul>
             <SocialImgStyle>
                <a href="https://www.facebook.com/"><FbImg/></a>
                <a href="https://www.instagram.com/"><InstImg/></a>
                <a href="https://twitter.com/"><TwitImg/></a>
                <a href="https://pl.pinterest.com/"><PintImg/></a>
             </SocialImgStyle>
         </ColStyle>
     )
 }

 export default Col4