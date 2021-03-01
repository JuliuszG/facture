export const contentVariant = {
    visible: { opacity: 1, transition: { 
        duration: 0,
        when: "beforeChildren",
        staggerChildren: 0.1,
     }},
    hidden: { opacity: 1, transition: {
        when: "afterChildren",
      }},
}

export const textVariant = {
    visible: { opacity: 1, transition: { ease: "easeIn", duration: 0.5 } },
    hidden: { opacity: 0 },
}

export const buttonVariant = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
}

export const imageVariant = {
    visible: { scale: 1, transition: { duration: 0.5 } },
    hidden: { scale: 1.3 },
}