import React from "react";
import "../Home/Home.css";
import "../../App.css";

import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";

// import Button from "../Button/Button";

export default function About(props) {
  return (
    <div className="home_wrapper">
      <Banner
        title={"Why CareFree Direct?"}
        text={"So many reasons"}
        // btnText={"Medicare Button"}
      />
      <div className="text_container">
        <h1 className="title">Why CareFree Direct?</h1>
        <p className="quote">"Health care, not just health insurance."</p>
        <p className="large_body">
          Carefree Direct is a leading healthcare insurance agency. Our Brokers
          empower consumers to confidently make sound decisions with ease
          regarding their health insurance options while eliminating unnecessary
          difficulties. With nearly 4,000 new members a month trusting Carefree
          to guide them in their healthcare decisions, we have quickly become
          one of the fastest growing agencies in America. Understanding each
          member’s unique situation, providing a unique solution for protection
          and bringing value to their life is a core value for Carefree and each
          of its brokers.
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
  );
}
