import React from 'react';
import ColStyle from './style/ColStyle'
import CopyLiStyle from './style/CopyLiStyle'
import CopyLiPosiotion from './style/CopyLiPosition';

const Copyright = () => {
    return (
        <ColStyle margin = '116px 0 0 113px'>
          <CopyLiStyle>
              <CopyLiPosiotion>© 2021 Facture Studio LLC</CopyLiPosiotion>
              <CopyLiPosiotion><a href="">Terms & Conditions</a></CopyLiPosiotion>
              <CopyLiPosiotion><a href="">Privacy Policy</a></CopyLiPosiotion>
          </CopyLiStyle>
        </ColStyle>
    )
}

export default Copyright;