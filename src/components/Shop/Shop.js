import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { addToDb, getCartStored } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const cartStored = getCartStored();
    // console.log(cartStored);
    let saveCart = [];
    for (const id in cartStored) {
      const addToProduct = products.find((product) => product.id === id);
      if (addToProduct) {
        const quantity = cartStored[id];
        addToProduct.quantity = quantity;
        // console.log(quantity);
        saveCart.push(addToProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleToCart = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = [];
    const exsits = products.find(
      (product) => product.id === selectedProduct.id
    );
    // console.log(exsits);
    if (!exsits) {
      selectedProduct.quantity = 1;
      newCart = [...newCart, selectedProduct];
    } else {
      const rest = products.filter(
        (product) => product.id !== selectedProduct.id
      );
      exsits.quantity = exsits.quantity + 1;
      newCart = [...rest, exsits];
      // console.log(rest);
    }
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="">
        <h4>All Products {products.length}</h4>
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleToCart={handleToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="shopping-container">
        <h3> Order summary</h3>

        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
