import React from 'react';
import {graphql , useStaticQuery} from 'gatsby'; 
import Continer from '../Layout/Container';
import Section from '../Layout/Section' ;
import Form from './Form/Form';


const Footer = () => {
    return (
        <>
         <Section color = '#191919' height = '55.70vh' >
            <Continer>
                <Form/>
            </Continer>
        </Section>     
        </>
    )
} 

export default Footer;