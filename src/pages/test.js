import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components'

export const query = graphql`
{
    file(relativePath: {eq: "icon/logo.png"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Image = styled(Img)`
img {
 height: 300%;   
}
width: 2%;
height: 2%;
`

const Test = ( {data: { file } } ) => {
    return (
        <>
          <Image fluid = {file.childImageSharp.fluid}/>  
        </>
    )
}

export default Test;