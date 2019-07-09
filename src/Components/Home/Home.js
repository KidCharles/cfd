import React from "react";
import "./Home.css";
// import "../../App.css";
import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";
import Button from "../Button/Button";
import Product from "../Product/Product.js";
import Split from "../SplitBanner/SplitBanner.js";

export default function Home(props) {
  return (
    <div className="">
      <Split />
      <div className="full_container">
        <h1 className="full_title">Why CareFree Direct?</h1>
        <p className="full_body">
          We find the right health care solutions, so you don't have to. Find a
          health plan to suit your budget while fulfilling your health care
          needs.
        </p>
        <div className="products_container">
          <Product />
        </div>
      </div>
      <Banner
        dental_kid={" "}
        btnText={"Get a Quote"}
        dental_button={" "}
        link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
      />
      <div className="home_wrapper">
        <div className="text_container">
          <h1 className="title">CareFree Direct can help!</h1>
          <p className="large_body">
            CareFree Direct has a team of courteous and knowledgeable licensed
            agents that can share additional insights on your Medicare coverage
            options and find the right plan for you. If you're unsure of what
            type of Medicare coverage would best suit your needs, don't hesitate
            to call us to speak with a CareFree Direct licensed agent to assist
            in finding the right coverage to meet your needs.
          </p>
          <h1 className="title">Get the most from your Medicare Plan</h1>
          <p className="large_body">
            Get the absolute most from your <span>Medicare Plan</span>. You may be missing
            out on a ton of benefits like <span>dentures</span>,{" "}
            <span>crowns</span>, <span>root canals</span>,<span> fillings</span>
            , <span>extractions</span> and other dental services at a{" "}
            <span>discounted or no cost rate</span> . Most dental plans only
            cover cleaning, twice a year! You deserve better than that. To
            ensure that you're being taken care of, get a personalized quote for
            a dental plan today or speak to one of CareFree Direct's Licensed
            Benefit Advisors.
          </p>
          <div className="whiteSpace48" />
          <Button
            link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
            text={"Get A Quote"}
          />
          <div className="whiteSpace48" />
        </div>
        <div className="full">
          <Call />
        </div>
        <div className="pic">
          <img src="https://i.imgur.com/sOLYWB1.png" alt="CFD logo overlay" />
        </div>
      </div>
    </div>
  );
}
