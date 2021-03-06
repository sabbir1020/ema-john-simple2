import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setproducts] = useState([])
    const [ cart, setCart] = useState([])
    useEffect( () =>{
        fetch('./products.JSON')
        .then(res =>res.json())
        .then(data=>setproducts(data))
    },[])
    const handleAddToCart = (product) =>{
       const newCart = [...cart,product]
       setCart(newCart);
       //save to local storages 
       addToDb(product.key)
    }
    return (
        <div className = "Shop-container">      
            <div className="products-container">
             
                {
                    products.map(product =><Product 
                        key = {product.key}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }        
            </div>
            <div className="cart-container">    
               <Cart cart= {cart}></Cart>
             </div>  
        </div>
    );
};

export default Shop;