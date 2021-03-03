import React from 'react';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';

const Images = styled.div`
max-width: 38px;
width: 100%;
margin-top: 98px;

@media (max-width: 1116px) {
  display: none;
}
`

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

    return (
        <>
         <Images>
            <Img fluid = {file.childImageSharp.fluid} />
         </Images>
        </>
    )
}

export default Image;