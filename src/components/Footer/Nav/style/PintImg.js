import React from 'react';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';

const ImagePint = styled.div`
max-width: 20px;
width:100%;
`


const PintImg = () => {

    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/pinterest-white.png"}) {
          childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    return (
        <ImagePint>
          <Img fluid = {file.childImageSharp.fluid}/>  
        </ImagePint>
    )
}

export default PintImg;