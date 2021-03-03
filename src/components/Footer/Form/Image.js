import React from 'react';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';

const Image = () => {

    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/logo.png"}) {
          childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

      const Images = styled.div`
        max-width: 38px;
        width: 100%;
        margin-top: 98px;
      `

    return (
        <>
         <Images>
            <Img fluid = {file.childImageSharp.fluid} />
         </Images>
        </>
    )
}

export default Image;