import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
{
  allShopifyCollection {
    edges {
      node {
        products {
          ...ShopifyProductFields
        }
        title
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
  allShopifyProduct {
    edges {
      node {
        ...ShopifyProductFields
      }
    }
  }
}
`

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(query)
  const prods = []
  allShopifyProduct.edges.map(node => [...node])
  return (
    <ProductContext.Provider
      value={{
        products: [],
        collections: allShopifyCollection.edges.map(node => node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
