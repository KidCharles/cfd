import React from "react";
import "./toolbar.css";

const toolbarToggleButton = props => (
  <button type="" className="ham" onClick={props.click}>
    <div className="ham_line" />
    <div className="ham_line" />
    <div className="ham_line" />
  </button>
);

export default toolbarToggleButton;
