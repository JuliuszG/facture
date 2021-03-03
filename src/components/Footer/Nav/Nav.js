import React from 'react';
import NavStyle from './style/NavStyle';
import ColPosition from './style/ColPosition';
import Col1 from './Col1';
import Col2 from './Col2';
import Col3 from './Col3';
import Col4 from './Col4';
import Copyright from './Copyright';

const Nav = () => {
    return (
        <NavStyle>
            <ColPosition>
                  <Col1/>
                  <Col2/>
                  <Col3/>
                  <Col4/>       
            </ColPosition>
            <Copyright/>
        </NavStyle>
        
    )
}

export default Nav;