import React from 'react'
import { ProductComponentWrapper, ProductImage } from './styles.js'
import { motion } from 'framer-motion'
import { contentVariant, textVariant, imageVariant } from './animations'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer';
import Image from 'gatsby-image'

const ProductComponent = ({ alignment, themeColor, height, content, image, link, smallHeader=false }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1
      });
    return (
        <ProductComponentWrapper 
            alignment={ alignment } themeColor={ themeColor } height={ height } smallHeader={ smallHeader }
        >
            <motion.div 
                className="content"
                variants={ contentVariant }
                initial="hidden"
                animate={ inView ? "visible" : "hidden" }
                ref={ ref }
            >
                <motion.div className="small" variants={ textVariant }>{ content.category }</motion.div>
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
            <ProductImage 
                variants={ imageVariant }
                initial="hidden"
                animate={ inView ? "visible" : "hidden" }
            >
                <Image 
                    style={{ height: "100%", width: "100%", objectFit: "cover" }} 
                    fluid={ image.src } 
                    alt={ image.alt } 
                    objectFit="cover"
                />
            </ProductImage>       
        </ProductComponentWrapper>
    )
}

export default ProductComponent