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
        <Link to="/About" style={{ textDecoration: 'none' }}>
          <li style={{ color: '#004869' }}>About</li>
        </Link>
        <li className="" style={{ color: '#004869' }}>Dental</li>
        <li className="" style={{ color: '#004869' }}>Medicare</li>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li className="" style={{ color: '#004869' }}>Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default toolbar;
