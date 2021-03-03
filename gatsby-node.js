const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const products = await graphql(`
      {
        allShopifyProduct {
          edges {
            node{
              shopifyId
              handle
            }
          }
        }
      }
    `)
    products.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `products/${ node.handle }`,
        context: {
            shopifyId: node.shopifyId
        },
        component: path.resolve('./src/templates/product-page-template/productPage.js')
      })
    })
  }