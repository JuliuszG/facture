import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';

const Images = styled.div`
width: 157px;
height: 20px;
margin-top: auto;
margin-bottom: auto;
`

const Logo = () => {
    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/Logo-Wordmark.png"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 157, maxHeight: 20) {
              ...GatsbyImageSharpFluid_noBase64
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