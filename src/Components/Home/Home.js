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
        <h1 className="full_title">We find the right health care solutions</h1>
        <p className="full_body">
          Find a health plan to suit your budget while fulfilling your health
          care needs.
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
            Get the absolute most from your Healthcare Plan. You may be missing
            out on a ton of benefits like fillings, dentures, bridges, and
            crowns at a discounted or at no cost rate. Most dental plans only
            cover cleaning, TWICE A YEAR! You deserve better than that. To
            ensure that you're being taken care of, get a personaized quote for
            a dental plan today or speak to one of CareFree Direct's Licensed
            Benefit Advisors.
          </p>
          <div className="whiteSpace48" />
          <Button
            link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
            text={"Get A Quote"}
          />
          <div className="whiteSpace48" />
          <p className="large_body">
            This is the information on why you want to click the link below.
            After reading this you wont be able to refuse. This is the
            information on why you want to click the link below. After reading
            this you wont be able to refuse.This is the information on why you
            want to click the link below. After reading this you wont be able to
            refuse.
          </p>
          <br />
          <p className="large_body ">
            This is the information on why you want to click the link below.
            After reading this you wont be able to refuse.This is the
            information on why you want to click the link below. After reading
            this you wont be able to refuse.This is the information on why you
            want to click the link below. After reading this you wont be able to
            refuse.This is the information on why you want to click the link
            below. After reading this you wont be able to refuse.
          </p>
          <br />
          <div className="whiteSpace64" />
        </div>
        <div className="full">
          <Call />
        </div>
        <div className="pic home_pic" />
      </div>
    </div>
  );
}
