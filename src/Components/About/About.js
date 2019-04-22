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
        title={"CAREFREE DIRECT"}
        text={"We find the right health care solution so you don’t have to"}
        // btnText={"Medicare Button"}
        pic1={"pic1"}
      />
      <div className="text_container">
        <h1 className="title">Why CareFree Direct?</h1>
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
        <br />
        <p className="large_body">
          Established in 2017, CareFree Direct is comprised of employees who are
          encouraged professional Brokers with a firm commitment to ethical
          business conduct. We offer quality health care from numerous companies
          within the Fortune 500 and a footprint that expands across the United
          States. We are devoted to our ever-growing list of Medicare recipients
          to ensure they receive proper care by providing a health plan to suit
          their budget while fulfilling their health care needs. Our managed
          care programs will provide necessary benefits to maintain your health,
          with some plans offering notable extras such as gym memberships or
          even resources for assistance on those endless utility bills.
        </p>
        <br />
        <p className="large_body">
          In today’s world, you can’t just trust your health to anyone. Our
          licensed benefit advisor will not only guide you to your ideal
          plan, but will be your ongoing support for all your health plan
          needs.
        </p>
      </div>
      <div className="whiteSpace64" />
      <Call />
    </div>
  );
}
