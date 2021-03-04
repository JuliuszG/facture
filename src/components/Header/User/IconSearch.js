import React from 'react';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';
import styled from 'styled-components';


const IconSearchStyle = styled.div`
width: 14px;
height: 14px;
margin-right: 10px;
`

const IconSearch = () => {

    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/lupa.png"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `);

    return (
        <IconSearchStyle>
        <Img fluid = {file.childImageSharp.fluid} />
        </IconSearchStyle>
    )
}

export default IconSearch;