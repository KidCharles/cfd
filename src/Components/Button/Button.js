import React from "react";
import "./button.css";

export default function Button(props) {
  let link = props.link;
  let text = props.text;
  let btnClass = "button ";
  // let show = props.show
  let buttonWrapper = "nobutton_wrapper";
  if (props.btn1) {
    btnClass = "button1 btn1 ";
  }
  if(props.dental_button){
    btnClass = "button dental_button";
  }
  return (
    <div className={buttonWrapper}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={btnClass}
      >
        <span className="anim_button">{text}</span>
      </a>
    </div>
  );
}
