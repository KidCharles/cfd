import React from "react";
import "../Home/Home.css";
import "../../App.css";

import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";

export default function About(props) {
  return (
    <div className="home_wrapper">
      <Banner
        title={"Dental Page"}
        text={"Dental Prompt"}
        btnText={"Dental Button"}
      />
      <div className="text_container">
        <h1 className="title">Need Dental?</h1>
        <p className="large_body">
          We partner with Provider Organizations and Insurance Carriers to
          provide world class service to their members and prospects.
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
