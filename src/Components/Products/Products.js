import React from "react";
import "../Home/Home.css";
import "../../App.css";
import Banner from "..//Banner/Banner";

export default function Products(props) {
  return (
    <div className="home_wrapper">
      <Banner
        title={"CAREFREE DIRECT"}
        text={
          "We work hard to find the right health care solutions, so you don’t have to."
        }
        pic1={"pic1"}
      />
      <div className="text_container">
        <h1 className="title">PRODUCTS</h1>
        <p className="quote">"Health CARE, not just health insurance."</p>
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
      </div>
      <div className="whiteSpace64" />
    </div>
  );
}
