import React from "react";
import "../Home/Home.css";
import "../../App.css";

import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";

export default function About(props) {
  return (
    <div className="home_wrapper">
      <Banner
        title={"Vision Page"}
        text={"Vision plans to fit your needs"}
        btnText={"Get Dental Coverage"}
        link={"http://www.star.ameritas.com/personal-plans?agnt=010S0582"}
        visionKid={"visionKid"}
      />
      <div className="text_container">
        <h1 className="title">Need Vision?</h1>
        <p className="large_body">
          If you are in the market for dental and vision insurance and find
          yourself asking, "Why do I need it?" consider the advantages to your
          overall health. Our oral and ocular health can be key indicators in
          detecting early stages of many health risks and diseases along with
          preventing many other health issues.
        </p>
        <br />
        <p className="large_body">
          We excel in exceeding clients goals by understanding objectives, and
          pivoting real-time to drive superior outcomes
        </p>
      </div>
      <div className="whiteSpace64" />
      <Call />
      <div className=" pic pic2" />
    </div>
  );
}
