import React from "react";
import "./Home.css";
import Product from "./Product";

function Home({ products }) {
  console.log(products);
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {products.map((product) => (
            <Product
              
              id={product.id}
              title={product.title}
              price={11.96}
              rating={5}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
