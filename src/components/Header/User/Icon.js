import React from 'react';
import {graphql , useStaticQuery} from 'gatsby'; 
import Img from 'gatsby-image';
import styled from 'styled-components';
import LinkSearchStyle from '../style/LinkSerachStyle';

const StyleIcon = styled.div`
width:16px;
height: 14px;
margin-left:41px;
`


const Icon = () => {

    const { file } = useStaticQuery(graphql `
    {
        file(relativePath: {eq: "icon/serce.png"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `);


    return (
        <StyleIcon>
          <LinkSearchStyle to='/dupa'><Img fluid = {file.childImageSharp.fluid} /></LinkSearchStyle>
        </StyleIcon>
    )
}

export default Icon;