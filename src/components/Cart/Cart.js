import React from "react";

const Cart = ({ cart }) => {
  //   console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  const tax = parseFloat(((total + shipping) * 0.1).toFixed(2));

  const grandTotal = parseFloat(total + shipping + tax);
  return (
    <div>
      <h4>Selected Items: {quantity}</h4>
      <p>Total Price: ${total} </p>
      <p>Total Shipping Charge: ${shipping} </p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
    </div>
  );
};

export default Cart;
