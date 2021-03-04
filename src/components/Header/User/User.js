import React from 'react';
import UserStyle from '../style/UserStyle'
import Search from './Search';
import Account from './Account';
import Cart from './Cart';
import Icon from './Icon';

const User = () => {
    return (
        <UserStyle>
          <Search/>
          <Account/>
          <Cart/>
          <Icon/>
        </UserStyle>
    )
}

export default User;