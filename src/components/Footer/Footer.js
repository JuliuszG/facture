import React from 'react';
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

    return (
        <>
            <Img fluid = {file.childImageSharp.fluid} imgStyle = {
                {
                    width: '20%',
                    height: '20%'
                }
            }/> 
        </>
    )
} 

export default Image;