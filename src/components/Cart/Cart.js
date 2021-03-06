import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart }= props;
    let total = 0;
    for(const product of cart){
        total= total + product.price;
    }
    const shipping = total>0? 15:0;
    const tax = (total + shipping)*.10;
    const grandTotal = total+ shipping+ tax;
    return (
        <div>
             <h3>Order Summary:</h3>
             <h5>Items Ordered:{props.cart.length}</h5>
                <p>Items:</p>  
                <p>shipping:{shipping.toFixed(2)}</p>
                <p>tax:{tax.toFixed(2)}</p>
                <p>GrandTotal:{grandTotal.toFixed(2)}</p>
                <p>Total:{total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;