import React from 'react';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';



const InstImg = () => {

    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/insta-white.png"}) {
          childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    const ImageInst = styled.div`
    max-width: 18px;
    width:100%;
    `


    return (
        <ImageInst>
          <Img fluid = {file.childImageSharp.fluid}/>  
        </ImageInst>
    )
}

export default InstImg;