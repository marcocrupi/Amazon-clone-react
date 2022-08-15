import React from "react";
import Product from "./Product";
import HomeImage from './images/home_image.jpg';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={HomeImage} alt="HomeImage" />
      </div>

      <div className="home__row">
        <Product />
        <Product />
      </div>

      <div className="home__row">
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>

      <div className="home__row">{/* Product */}</div>
    </div>
  );
}

export default Home;
