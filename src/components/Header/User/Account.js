import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LinkSearchStyle from '../style/LinkSerachStyle';

const AccountStyle = styled.div`
margin-left: 40px;
`

const Account = () => {
    return (
        <AccountStyle>
          <LinkSearchStyle to='/Account'>Account</LinkSearchStyle> 
        </AccountStyle>
    )
}

export default Account;