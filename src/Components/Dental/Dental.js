import React from "react";
import "../Home/Home.css";
import "../../App.css";

import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";
import Button from "../Button/Button";


export default function About(props) {
  return (
    <div className="home_wrapper">
      <Banner
        title={"Dental and vision plans to fit your needs"}
        text={"Get started on your quote by clicking the link below"}
        btnText={"See Dental Plans"}
        link={"http://www.star.ameritas.com/personal-plans?agnt=010S0582"}
        dentalPic={"dentalPic"}
      />
      <div className="text_container">
        <h1 className="title">
          Why do I need dental and vision insurance coverage?
        </h1>
        <p className="large_body">
          If you are in the market for dental and vision insurance and find
          yourself asking, "Why do I need it?" consider the advantages to your
          overall health. Our oral and ocular health can be key indicators in
          detecting early stages of many health risks and diseases along with
          preventing many other health issues.
        </p>
        <br />
        <h1 className="title">
          CareFree Direct understands that your needs are unique
        </h1>
        <p className="large_body">
          We're committed to finding you the dental and vision plans that meets
          your needs. Our PrimeStar dental and vision insurance plans offer
          affordable coverage with instant free online quotes, coverage for
          individuals 18+ (including seniors), no online enrollment fees and the
          Ameritas dental network.
        </p>
        <div className="whiteSpace48" />
        <Button
          link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
          text={"See Dental Plans"}
        />
      </div>
      <div className="whiteSpace64" />
      <Call
        prompt={
          "Finding dental and vision insurance to meet your needs doesn't have to be difficult. Let us help!"
        }
      />
      <div className="pic" />
    </div>
  );
}
