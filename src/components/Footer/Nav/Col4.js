import React from 'react';
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
                 <LiStyle><a href="">@facture_studio</a></LiStyle>
             </ul>
             <SocialImgStyle>
                <FbImg/>
                <InstImg/>
                <TwitImg/>
                <PintImg/>
             </SocialImgStyle>
         </ColStyle>
     )
 }

 export default Col4