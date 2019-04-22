import React from "react";
import "./Home.css";
import "../../App.css";
import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";
// import pic2 from '../../assets/photo2.jpg';

import Button from "../Button/Button";

export default function Home(props) {
  return (
    <div className="home_wrapper">
      <Banner
        title={"Are your loved ones covered?"}
        text={
          "Join the 5 million+ satisfied customers who found dental insurance coverage"
        }
        btnText={"Route Test"}
        pic1={"pic1"}
      />
      <div className="text_container">
        <h1 className="title">Main Selling Point</h1>
        <p className="large_body center">
          Click the button below to go sign up!
        </p>
        <div className="whiteSpace48" />
        <Button
          link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
          text={"Make money"}
        />
        <div className="whiteSpace48" />
        <p className="large_body">
          This is the information on why you want to click the link below. After
          reading this you wont be able to refuse. This is the information on
          why you want to click the link below. After reading this you wont be
          able to refuse.This is the information on why you want to click the
          link below. After reading this you wont be able to refuse.
        </p>
        <br />
        <p className="large_body ">
          This is the information on why you want to click the link below. After
          reading this you wont be able to refuse.This is the information on why
          you want to click the link below. After reading this you wont be able
          to refuse.This is the information on why you want to click the link
          below. After reading this you wont be able to refuse.This is the
          information on why you want to click the link below. After reading
          this you wont be able to refuse.
        </p>
        <br />
        <div className="whiteSpace72" />
      </div>
      <div className="whiteSpace72" />
      <Call />
      <div className="pic" />
    </div>
  );
}
