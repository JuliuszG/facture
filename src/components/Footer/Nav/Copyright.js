import React from 'react';
import CopyStyle from './style/CopyStyle';
import CopyLiStyle from './style/CopyLiStyle';
import CopyLiPosiotionC from './style/CopyLiPositionC';
import CopyLiPosiotion from './style/CopyLiPosition';

const Copyright = () => {
    return (
        <CopyStyle margin = '116px 0 0 0'>
          <CopyLiStyle>
              <CopyLiPosiotionC>© 2021 Facture Studio LLC</CopyLiPosiotionC>
              <CopyLiPosiotion><a href="/Terms&Conditions">Terms & Conditions</a></CopyLiPosiotion>
              <CopyLiPosiotion><a href="/Privaty_Policy">Privacy Policy</a></CopyLiPosiotion>
          </CopyLiStyle>
        </CopyStyle>
    )
}

export default Copyright;