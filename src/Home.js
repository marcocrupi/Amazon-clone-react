import React from "react";
import Product from "./Product";
import HomeImage from "./images/home_image.jpg";
import Product001 from "./images/product001.jpg";
import Product002 from "./images/product002.jpg";
import Product003 from "./images/product003.jpg";
import Product004 from "./images/product004.jpg";
import Product005 from "./images/product005.jpg";
import Product006 from "./images/product006.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={HomeImage} alt="HomeImage" />

        <div className="home__row">
          <Product
            id="1621672"
            title="2021 Apple iPad mini (8,3', Wi-Fi, 64GB) - viola (6ª generazione)"
            price={29.99}
            image={Product001}
            rating={5}
          />

          <Product
            id="7676796"
            title="Xiaomi Smart Band 6, Orologio Smart Xiaomi, Schermo AMOLED 1.56', Monitoraggio SpO2 e Battito Cardiaco"
            price={239.2}
            image={Product002}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="565465"
            title="Samsung C34J791W - Monitor curvo da 86,36 cm"
            price={229}
            image={Product003}
            rating={5}
          />
          <Product
            id="685763"
            title="Echo (4ª generazione) - Audio di alta qualità, hub per Casa Intelligente e Alexa"
            price={59.99}
            image={Product004}
            rating={3}
          />
          <Product
            id="53764465"
            title="Spigen Cover Rugged Armor Compatibile con Google Pixel 6 PRO - Nero"
            price={13.99}
            image={Product005}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="2353454"
            title="SAMEBIKE LO26-II versione di aggiornamento Biciclette elettriche 48V 10.4AH 26 pollici mountain bike elettriche pieghevoli con display LCD"
            price={13.99}
            image={Product006}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
