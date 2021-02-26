import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

export const query = graphql`
    query ProductQuery($shopifyId: String) {
        shopifyProduct(shopifyId: {eq: $shopifyId}) {
            title
            description
            images {
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }       
        }
    }
`

const ProductPage = ({ data: { shopifyProduct } }) => {
    return (
        <>
            <h1>{ shopifyProduct.title }</h1>
            <p>{ shopifyProduct.description }</p>
            <Image imgStyle={ {width: 300, height: 300} } fluid={ shopifyProduct.images[0].localFile.childImageSharp.fluid } />
        </>
    )
}

export default ProductPage