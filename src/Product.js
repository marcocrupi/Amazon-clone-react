import React from "react";
import Product001 from "./images/product001.jpg";
import "./Product.css";

function Product() {
  return (

    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
         <p>⭐</p>
        </div>
      </div>

      <img src={Product001} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
