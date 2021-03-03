import React from 'react';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';

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

      const Images = styled.div`
        max-width: 156.92px;
        height: 100%;
      `

    return (
        <Images>
            <Img fluid = {file.childImageSharp.fluid} />
        </Images>

        
    )
}

export default Logo;