import React from 'react'
import { ProductComponentWrapper, ProductImage, LeftImage, RightImage } from './styles.js'
import { motion } from 'framer-motion'
import { contentVariant, textVariant, imageVariant, leftImageVariant } from './animations'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer';
import Image from 'gatsby-image'

const ProductComponent = ({ alignment, themeColor, height, content, image, link, titleSize=false, doubleImage, categoryDecoration }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
      });
    return (
        <ProductComponentWrapper 
            alignment={ alignment } themeColor={ themeColor } height={ height } titleSize={ titleSize }
        >
            <motion.div 
                className="content"
                variants={ contentVariant }
                initial="hidden"
                animate={ inView ? "visible" : "hidden" }
                ref={ ref }
            >
                <motion.div className={ categoryDecoration ? "small decoration" : "small" } variants={ textVariant }>{ content.category }</motion.div>
                <motion.h2 variants={ textVariant }>{ content.title }</motion.h2>
                { content.paragraph && (
                    <motion.p variants={ textVariant }>{ content.paragraph }</motion.p>
                ) }
                <motion.div variants={ textVariant }>
                    <Link to={ link.url }>
                        { link.name }<span>&#x2B;</span>
                    </Link>
                </motion.div>
            </motion.div>
            { !doubleImage ? (
                      <ProductImage 
                      variants={ imageVariant }
                      initial="hidden"
                      animate={ inView ? "visible" : "hidden" }
                  >
                      <Image 
                          style={{ height: "100%", width: "100%", objectFit: "cover" }} 
                          fluid={ image[0].src } 
                          alt={ image[0].alt } 
                          objectFit="cover"
                      />
                  </ProductImage>   
            ) :
            (
                <>
                    <LeftImage
                        variants={ leftImageVariant }
                        initial="hidden"
                        animate={ inView ? "visible" : "hidden" }
                    >
                        <Image 
                            style={{ height: "100%", width: "100%", objectFit: "cover" }} 
                            fluid={ image[0].src } 
                            alt={ image[0].alt } 
                            objectFit="cover"
                        />
                    </LeftImage>
                    <RightImage
                        variants={ leftImageVariant }
                        initial="hidden"
                        animate={ inView ? "visible" : "hidden" }
                    >
                        <Image 
                            style={{ height: "100%", width: "100%" }} 
                            imgStyle={{ objectFit: "cover", objectPosition: "50% 85%" }}
                            fluid={ image[1].src } 
                            alt={ image[1].alt } 
                            objectFit="cover"
                        />
                    </RightImage>
                </>
            )}
        </ProductComponentWrapper>
    )
}

export default ProductComponent