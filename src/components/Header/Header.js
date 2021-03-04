import React from 'react';
import Section from '../Layout/Section';
import Container from '../Layout/Container';
import Nav from './Nav/Nav';
import User from './User/User';

const Header = () => {
    return (
        <Section height = '83px'>
            <Container display= 'flex'>
                <Nav/>
                <User/>
            </Container>
        </Section>
    )
}

export default Header;