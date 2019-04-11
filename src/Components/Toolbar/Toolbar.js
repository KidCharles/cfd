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
        <Link to="/About" style={{ textDecoration: "none" }}>
          <li className="toolbar_item">About</li>
        </Link>
        <Link to="/dental" style={{ textDecoration: "none" }}>
          <li className="toolbar_item">Dental</li>
        </Link>
        <Link to="/medicare" style={{ textDecoration: "none" }}>
          <li className="toolbar_item">Medicare</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="toolbar_item">Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default toolbar;
