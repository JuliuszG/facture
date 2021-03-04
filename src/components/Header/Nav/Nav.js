import React from 'react';
import { Link } from 'gatsby';
import NavStyl from '../style/NavStyl';
import Logo from '../Logo/Logo';
import NavPosition from '../style/NavPosition';
import NavLiStyle from '../style/NavLiStyle';

const Nav = () => {
    return (
        <NavStyl>
          <Logo/>
          <NavPosition>
            <NavLiStyle> <Link to='/Shop'>Shop</Link> </NavLiStyle>
            <NavLiStyle> <Link to='/Installation'>Installation</Link> </NavLiStyle>
            <NavLiStyle> <Link to='/About'>About</Link> </NavLiStyle>
            <NavLiStyle> <Link to='/Stories'>Stories</Link> </NavLiStyle>
            <NavLiStyle> <Link to='/Trade'>Trade</Link> </NavLiStyle>
            <NavLiStyle> <Link to='/Contact'>Contact</Link> </NavLiStyle>
          </NavPosition>
        </NavStyl>
    )
}

export default Nav;