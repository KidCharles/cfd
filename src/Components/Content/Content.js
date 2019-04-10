import React from "react";
import "../../App.css";
import "./Content.css";

import city from "../../assets/pp1.jpg";

export default function Content(props) {
  return (
    <div className="content_wrapper">
      <img src={city} alt="city scape" className="contentPic" />
      <div className="text">
        <h1 className="title">Need Dental?</h1>
        <p className="body">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}
