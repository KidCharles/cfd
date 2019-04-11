import React from "react";
import "../../App.css";
import "./Content.css";

import city from "../../assets/pp1.jpg";

export default function Content(props) {
  let title = props.title;
  let text = props.text;
  return (
    <div className="content_wrapper">
      <img src={city} alt="city scape" className="contentPic" />
      <div className="text">
        <h1 className="title">{title}</h1>
        {/* <p className="body">{text}</p> */}
        <div className="body">{text}</div>
      </div>
    </div>
  );
}
