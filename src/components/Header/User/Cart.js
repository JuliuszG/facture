import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LinkSearchStyle from '../style/LinkSerachStyle';

const CardStyle = styled.div`
margin-left: 40px;
`;


const Cart = () => {
    return (
        <CardStyle>
          <LinkSearchStyle to='/Cart'>Cart 0</LinkSearchStyle>
        </CardStyle>
    )
}

export default Cart;