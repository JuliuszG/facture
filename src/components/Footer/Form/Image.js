import React from 'react';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';

const Image = () => {

    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/logo.png"}) {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

      const Images = styled.div`
        width: 2.9820vw;
        height: 7.881vh;
        margin-top: 16.0919vh;
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