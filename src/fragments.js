import { graphql } from 'gatsby'

export const productFields = graphql`
    fragment ShopifyProductFields on ShopifyProduct {
        title
        description
        handle
        shopifyId
        createdAt
        priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
        }
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
`