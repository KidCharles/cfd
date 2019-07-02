import React from "react";
import "../Home/Home.css";
import "../../App.css";

import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";
import Product from "../Product/Product.js";

// import Button from "../Button/Button";

export default function About(props) {
  return (
    <div>
      <div className="products_container">
        <Product />
      </div>
      <div className="home_wrapper">
        <Banner
          title={"Medicare Coverage Options"}
          text={"Get more than basic Medicare"}
          btnText={"Medicare Button"}
          medical={"medical"}
        />
        <div className="text_container">
          <h1 className="title">Need Health Insurance?</h1>
          <p className="large_body">
            We partner with Provider Organizations and Insurance Carriers to
            provide world class service to their members and prospects.
          </p>
          <br />
          <p className="large_body">
            We specialize in not only SELLING, but RETAINING members through
            direct and ongoing communication
          </p>
          <br />
          <p className="large_body">
            We excel in exceeding clients goals by understanding objectives, and
            pivoting real-time to drive superior outcomes
          </p>
        </div>
        <div className="whiteSpace64" />
        <Call />
      </div>
    </div>
  );
}
