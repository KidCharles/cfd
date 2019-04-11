import React from "react";
import "../../App.css";
import "./Home.css";

import Content from "../Content/Content";
import Button from "../Button/Button";

export default function Home(props) {
  return (
    <div className="home_wrapper">
      <h1 className="title">Main Selling Point</h1>
      <p className='large_body'>This is the information on why you want to click the link below. After reading this you wont be able to refuse</p>
      <Button />
    </div>
  );
}
