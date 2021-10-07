import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name,img, seller,price,stock, star}= props.product
    const element = <FontAwesomeIcon icon={faShoppingCart , faStar} />
    return (
        <div className= 'product'>
            <div>
                <img src={img} alt="" />
            </div>
        
            <div>
                    <h5 className= 'product-name'>Name:{name}</h5>
                    <h4>By:{seller}</h4>
                    <h4>${price}</h4>
                    <h4>{element}{star}</h4>
                    <p>only {stock} left in stock - order soon</p>
                    <button
                    onClick = { () =>props.handleAddToCart(props.product)}
                     className='btn-regular'
                     >{element} Add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;