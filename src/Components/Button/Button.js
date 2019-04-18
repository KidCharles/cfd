import React from "react";
import "./button.css";

export default function Button(props) {
  let link = props.link;
  // let text = props.text;
  let text = "enroll now";
  let btnClass = "button";
  if (props.btn1) {
    btnClass = "button1 btn1";
  }
  return (
    <div className="button_wrapper">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={btnClass}
      >
        {text}
      </a>
    </div>
  );
}
