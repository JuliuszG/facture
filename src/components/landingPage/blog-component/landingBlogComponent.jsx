import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Image from 'gatsby-image'
import { BlogLandingWrapper, BlogImageWrapper } from './styles'
import { contentVariant, textVariant, imageVariant, leftImageVariant } from '../product-component/animations'
import { Link } from 'gatsby'

const LandingBlogComponent = ({ img }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
      });
    return (
        <BlogLandingWrapper>
            <motion.div 
                className="content"
                variants={ contentVariant }
                initial="hidden"
                animate={ inView ? "visible" : "hidden" }
                ref={ ref }>
                <motion.div variants={ textVariant } className="small decoration">Featured Installation</motion.div>
                <motion.h2 variants={ textVariant }>INTERSECT by Lexus</motion.h2>
                <motion.div variants={ textVariant }>
                    <Link to="/installation">Read More<span>&#x2B;</span></Link>
                </motion.div>
            </motion.div>
            <BlogImageWrapper>
                <Image fluid={ img.src } alt={ img.alt } />
            </BlogImageWrapper>
        </BlogLandingWrapper>
    )
}

export default LandingBlogComponent