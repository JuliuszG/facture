import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <>
          <ul>
            <li> <Link to='/Shop'>Shop</Link> </li>
            <li> <Link to='/Installation'>Installation</Link> </li>
            <li> <Link to='/About'>About</Link> </li>
            <li> <Link to='/Stories'>Stories</Link> </li>
            <li> <Link to='/Trade'>Trade</Link> </li>
            <li> <Link to='/Contact'>Contact</Link> </li>
          </ul>
        </>
    )
}

export default Nav;