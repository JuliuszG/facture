import React from 'react'
import { ProductComponentWrapper, ProductImage, ButtonLink } from './styles.js'
import { motion } from 'framer-motion'
import { contentVariant, textVariant, buttonVariant } from './animations'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer';

const ProductComponent = ({ alignment, themeColor, height, content, image, link }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1
      });
    return (
        <ProductComponentWrapper alignment={ alignment } themeColor={ themeColor } height={ height }>
            <motion.div 
                className="content"
                variants={ contentVariant }
                initial="hidden"
                animate={ inView ? "visible" : "hidden" }
                ref={ ref }
            >
                <motion.div className="small" variants={ textVariant }>{ content.category }</motion.div>
                <motion.h2 variants={ textVariant }>{ content.title }</motion.h2>
                <motion.p variants={ textVariant }>{ content.paragraph }</motion.p>
                <ButtonLink variants={ buttonVariant } themeColor={ themeColor }>
                    <Link to={ link.url }>
                        { link.name }<span>&#x2B;</span>
                    </Link>
                </ButtonLink>
            </motion.div>
            <ProductImage 
                style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }} 
                fluid={ image.src } 
                alt={ image.alt } 
                objectFit="cover"
                fadeIn={ true }
            />
        </ProductComponentWrapper>
    )
}

export default ProductComponent