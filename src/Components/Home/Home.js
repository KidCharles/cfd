import React from "react";
import "./Home.css";
import "../../App.css";
import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";

import city from "../../assets/pp1.jpg";
import logo from "../../assets/logos/logo_white.svg";

import Button from "../Button/Button";

export default function Home(props) {
  return (
    <div className="home_wrapper">
      <Banner />
      {/* <div className="bannerDiv">
        <img src={city} alt="cityscape" className="banner" />
        <img src={logo} alt="logo" className="logowhite" />
      </div> */}
      <h1 className="title">Main Selling Point</h1>
      <p className="large_body">
        This is the information on why you want to click the link below. After
        reading this you wont be able to refuse.
      </p>
      <p className="large_body">Click the button below to go sign up!</p>
      <Button
        link={
          "https://www.ameritas.com/wps/portal/corp/Home/home/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zizQMNzTwsTQx8DRzD3AwcXSwtQ5wsDA0N_A31wwkpiAJKG-AAjgZA_VFgJXAT3F3MHYEmhAYahXlZGhhYmEEV4DGjIDfCINNRUREAaWDiFg!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/"
        }
      />
      <div className="whiteSpace16" />
      <Call />
    </div>
  );
}
