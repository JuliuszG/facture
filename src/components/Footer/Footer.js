import React from 'react';
import {graphql , useStaticQuery} from 'gatsby'; 
import Continer from '../Layout/Container';
import Section from '../Layout/Section' ;
import Form from './Form/Form';
import Nav from './Nav/Nav';


const Footer = () => {
    return (
        <>
         <Section color = '#191919' height = '527px' >
            <Continer display= 'flex'>
                <Form/>
                <Nav/>
            </Continer>
        </Section>     
        </>
    )
} 

export default Footer;