import React from "react";
import { Link } from "react-router-dom";
import "./toolbar.css";

import phone from "../../assets/phone.png";

const toolbar = props => {
  let toolbarClasses = "toolbar";
  if (props.show) {
    toolbarClasses = "toolbar open";
  }
  return (
    <nav className={toolbarClasses}>
      <div className="toolbar_container">
        <div>
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
        </div>
        <div className="call_toolbar">
          <img src={phone} alt="phone icon" className="phone_icon" />
          <a
            data-replaceable-phone-dialable=""
            className="toolbar_item"
            href="tel:"
          >
            <span>
              Call Us at <span className="">1-456-789-234</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default toolbar;
