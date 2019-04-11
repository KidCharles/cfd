import React from "react";
import "./button.css";

export default function Button(props) {
  let link = props.link;
  return (
    <div className="button_wrapper">
      <a href={link} className='button'>
          MAKE MONEY
      </a>
    </div>
  );
}
