import React from "react";
import { Link } from "react-router-dom";
import "./toolbar.css";

const toolbar = props => {
  let toolbarClasses = "toolbar";
  if (props.show) {
    toolbarClasses = "toolbar open";
  }
  return (
    <nav className={toolbarClasses}>
      <ul>
        <Link to="/About">
          <li className="">About</li>
        </Link>
        <li className="">Dental</li>
        <li className="">Medicare</li>
        <Link to="/">
          <li className="">Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default toolbar;
