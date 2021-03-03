import React from 'react';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';



const FbImg = () => {

    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/face-white.png"}) {
          childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    const ImageFb = styled.div`
    max-width: 9px;
    width:100%;
    `


    return (
        <ImageFb>
          <Img fluid = {file.childImageSharp.fluid}/>  
        </ImageFb>
    )
}

export default FbImg;