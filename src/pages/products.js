import React, { useState, useContext } from 'react'
import { graphql, Link } from 'gatsby'
import ProductContext from '../context/productContext'


const Products = () => {
    const { collections, products } = useContext(ProductContext)
    const [category, setCategory] = useState('all')
    const [selectedCategoryProducts, setSelectedCategoryProducts] = useState(products)
    const findProducts = (c) => {
        return collections.find(({ node }) => node.title === c)  
    }
    const handleChange = ({ value }) => {
        setCategory(value)
        if( value !== 'all' ) {
            setSelectedCategoryProducts(findProducts(value).node.products)
        } else {
            setSelectedCategoryProducts(products)
        }
    }
    return (
        <>
            <select onChange={ e => handleChange(e.target) } value={ category }>
                <option value="all">All</option>
                { collections.map(({ node: { title } } , index) => (
                     <option key={ index } value={ title }>{ title }</option>
                )) }
            </select>
            <ul>
                { category !== 'all' ? 
                selectedCategoryProducts.map((prod, i) => <li key={i}>{ prod.title }</li>) :
                selectedCategoryProducts.map((prod, i) => <li key={i}>{ prod.node.title }</li>) }
            </ul>
        </>
    )
}

export default Products