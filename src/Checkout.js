import React from "react";
import AmazonAd from "./images/amazon_ad_.jpg";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={AmazonAd} alt="" />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          
        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
