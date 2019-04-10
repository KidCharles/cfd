import React from "react";
import "./Nav.css";
import Hamburger from "../Toolbar/ToolbarToggleButton.js";

export default function Nav(props) {
  return (
    <div className="nav_wrapper">
      <div className="hamburger">
        <Hamburger click = {props.toolbarToggleClickHandler}/>
      </div>
      <div className="cfd_logo_mobile">CareFree Direct</div>
      <div className="items_nav">
        <ul className="items_container">
          <li className="">About</li>
          <li className="">Dental</li>
          <li className="">Medicare</li>
        </ul>
      </div>
    </div>
  );
}
