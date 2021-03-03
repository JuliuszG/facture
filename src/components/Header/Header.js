import React from 'react';
import Section from '../Layout/Section';
import Container from '../Layout/Container';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <Section height = '83px'>
            <Container>
                <Logo/>
                <Nav/>
            </Container>
        </Section>
    )
}

export default Header;