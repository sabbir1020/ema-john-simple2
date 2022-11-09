import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { name, id, img, price, seller } = props.product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>Name: {name}</h3>
        <p>Price :{price}</p>
        <p>Seller : {seller}</p>
      </div>

      <button
        onClick={() => props.handleToCart(props.product)}
        className="btn-cart"
      >
        Add To cart
      </button>
    </div>
  );
};

export default Product;
