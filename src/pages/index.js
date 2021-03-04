import React from "react"
import ProductComponent from "../components/landingPage/product-component/ProductComponent"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import LandingBlogComponent from "../components/landingPage/blog-component/landingBlogComponent"

export const query = graphql`
  {
    section1: file(relativePath: {eq: "banner/banner1.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    section2: file(relativePath: {eq: "banner/banner2.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1800)  {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    section3: file(relativePath: {eq: "banner/banner3.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1800)  {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    section4: file(relativePath: {eq: "banner/banner4.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1800)  {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    section5img1: file(relativePath: {eq: "banner/banner6_1.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1800)  {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    section5img2: file(relativePath: {eq: "banner/banner6_2.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1800)  {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    section6: file(relativePath: {eq: "banner/banner7.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1600)  {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <ProductComponent
      alignment="center"
      themeColor="light"
      height="small"
      content={{
        category: 'sitting',
        title: 'Ripple Chaise Lounge',
        paragraph: 'This piece is an imaginative re-interpretation of the classic chaise lounge.'
      }}
      image={[
        {
          src: data.section1.childImageSharp.fluid,
          alt: "Background Image"
        }
      ]}
      link={{
        name: "See Sittings",
        url: "/products?tag=sittings"
      }}
    />
      <ProductComponent
      alignment="bottom"
      themeColor="dark"
      height="big"
      content={{
        category: 'Wall',
        title: 'Offset Round',
        paragraph: 'This wall object playfully references the human eye itself.'
      }}
      image={[
        {
          src: data.section2.childImageSharp.fluid,
          alt: "Background Image"
        }
      ]}
      link={{
        name: "See Wall",
        url: "/products?tag=wall"
      }}
    />
     <ProductComponent
      alignment="center"
      themeColor="light"
      height="big"
      content={{
        category: 'Tables',
        title: 'Ripple Table',
        paragraph: 'The Ripple Dining Table consists of a circular top set on a tapered conical base'
      }}
      image={[
        {
          src: data.section3.childImageSharp.fluid,
          alt: "Background Image"
        }
      ]}
      link={{
        name: "See Tables",
        url: "/products?tag=tables"
      }}
    />
    <ProductComponent
      alignment="bottom"
      themeColor="dark"
      height="big"
      content={{
        category: 'Objects',
        title: 'Green Column',
        paragraph: 'The Green Column consists of a circular top set on a tapered conical base'
      }}
      image={[
        {
          src: data.section4.childImageSharp.fluid,
          alt: "Background Image"
        }
      ]}
      link={{
        name: "See Objects",
        url: "/products?tag=objects"
      }}
    />
      <LandingBlogComponent img={{
        src: data.section2.childImageSharp.fluid,
        alt: "Blog Image"
      }} />
      <ProductComponent 
      alignment="center" 
      themeColor="dark" 
      height="big"
      content={{
        category: 'DEsign Studio',
        title: 'Experimenting with Color, Light & Transparency',
      }}
      image={[
        {
          src: data.section5img1.childImageSharp.fluid,
          alt: "Background Image"
        },
        {
          src: data.section5img2.childImageSharp.fluid,
          alt: "Background Image"
        }
      ]}
      link={{
        name: "About Us",
        url: "/about"
      }}
      titleSize={ '450px' }
      doubleImage={ true }
      categoryDecoration={ true }
    />
      <ProductComponent
      alignment="center"
      themeColor="light"
      height="big"
      content={{
        category: 'Custom',
        title: 'Work With Us to — Customize Your Products',
      }}
      image={[
        {
          src: data.section6.childImageSharp.fluid,
          alt: "Background Image"
        }
      ]}
      link={{
        name: "Custom Inquire",
        url: "/products/custom"
      }}
      titleSize={ '400px' }
    />
  </>
)
export default IndexPage