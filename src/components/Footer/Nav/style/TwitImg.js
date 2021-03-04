import React from 'react';
import styled from 'styled-components';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';


const ImageTwit = styled.div`
max-width: 17.12px;
width:100%;
`


const TwitImg = () => {

    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/twiter-white.png"}) {
          childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

    return (
        <ImageTwit>
          <Img fluid = {file.childImageSharp.fluid}/>  
        </ImageTwit>
    )
}

export default TwitImg;