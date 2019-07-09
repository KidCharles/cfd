import React from "react";
import "../Home/Home.css";
import "../../App.css";

import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";

export default function About(props) {
  return (
    <div className="home_wrapper">
      <Banner
        title={"Vision and Hearing"}
        text={"Vision and Hearing plans to fit your needs"}
        btnText={"Talk Now"}
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
        <h1 className="title">
          CareFree Direct Works with Leading Health Plans to Provide Comprehensive and Affordable
          Hearing Aid Coverage
        </h1>
        <p className="large_body">
          Getting help with hearing loss can be confusing and expensive. That’s
          where CareFree Direct comes in. Our hearing aid benefit programs give you
          everything you need to improve your hearing at the lowest possible
          out-of-pocket cost.
        </p>
        <h1 className="title">Dental / Vision / Hearing</h1>
          <p className="large_body">
            If you are in the market for dental and vision insurance and find
            yourself asking, 'Why do I need it?' consider the advantages to your
            overall health. Our oral and ocular health can be key indicators in
            detecting early stages of many health risks and diseases along with
            preventing many other health issues. We excel in exceeding clients
            goals by understanding objectives, and pivoting real-time to drive
            superior outcomes.
          </p>
          <br />
          <br />
          <p className="large_body">
            CareFree Direct has a team of courteous and knowledgeable licensed
            agents that can share additional insights on your Medicare coverage
            options and find the right plan for you. If you're unsure of what
            type of Medicare coverage would best suit your needs, don't hesitate
            to call us to speak with a CareFree Direct licensed agent to assist
            in finding the right coverage to meet your needs.
          </p>
      </div>
      <div className="whiteSpace64" />
      <Call />
      <div className=" pic pic2" />
    </div>
  );
}
