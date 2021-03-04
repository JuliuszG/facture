import React, { useState, useContext } from 'react'
import { graphql, Link } from 'gatsby'
import ProductContext from '../context/productContext'


const Products = () => {
    const [category, setCategory] = useState('all')
    const { collections } = useContext(ProductContext)
    console.log(collections);
    return (
        <h1>Products</h1>
    )
}

export default Products