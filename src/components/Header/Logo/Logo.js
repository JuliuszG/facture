import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';

const Images = styled.div`
max-width: 156.92px;
height: 100%;
`

const Logo = () => {
    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/Logo-Wordmark.png"}) {
          childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    return (
        <Images>
            <Link to ='/#' ><Img fluid = {file.childImageSharp.fluid} /> </Link>
        </Images>

        
    )
}

export default Logo;