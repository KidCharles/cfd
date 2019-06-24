import React from "react";

// import logo from "../../assets/logos/cfd_logo_color.svg";

import "./Call.css";
import "../../App.css";

export default function Callcta(props) {
  let logo = "https://i.imgur.com/zElzlxW.png";
  let prompt = props.prompt;
  let prompt_style = "prompt";
  if (!props.prompt) {
    prompt_style = "no_prompt";
  }
  return (
    <div className="call_wrapper">
      <div className="call_contianer">
        <p className={prompt_style}>{prompt}</p>
        <h2 className="call">Call to speak to a Licensed Benefit Advisor</h2>
        <div className="call_box">
          <a
            data-replaceable-phone-dialable=""
            className="toolbar_item"
            href="tel:18558700077"
          >
            <span className="number">
              <span className="">1-855-870-0077</span>
            </span>
          </a>
        </div>
        <img src={logo} alt="cfd Logo" className="logo" />
      </div>
    </div>
  );
}
