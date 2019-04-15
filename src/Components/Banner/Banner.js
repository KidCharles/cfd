import React from "react";

import "./Banner.css";
import Button from "../Button/Button";

export default function Banner(props) {
  return (
    <div className="bannerWrapper">
      <h1 className="bannerTitle">Ever wanted Dental?</h1>
      <p className="bannerText">
        Join the 5 million+ satisfied customers who found health insurance
        coverage
      </p>
      {/* <div className='whiteSpace16' ></div>  */}
      <Button />
    </div>
  );
}
