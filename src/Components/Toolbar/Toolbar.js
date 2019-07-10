import React from "react";
import { Link } from "react-router-dom";
import "./toolbar.css";
import "../Button/button.css";

const toolbar = props => {
  // let phone = "https://i.imgur.com/PhmyHS2.png";
  let toolbarClasses = "toolbar";
  if (props.show) {
    toolbarClasses = "toolbar open";
  }
  return (
    <nav className={toolbarClasses}>
      <div className="toolbar_container" onClick={props.backdropClickHandler}>
        <div>
          <ul>
            <Link to="/medicare" style={{ textDecoration: "none" }}>
              <li className="toolbar_item" onClick={() => props.to_top()}>
                Medicare
              </li>
            </Link>
            <Link to="/dental" style={{ textDecoration: "none" }}>
              <li className="toolbar_item" onClick={() => props.to_top()}>
                Dental
              </li>
            </Link>
            <Link to="/vision" style={{ textDecoration: "none" }}>
              <li className="toolbar_item" onClick={() => props.to_top()}>
                Vision / Hearing
              </li>
            </Link>
            <Link to="/About" style={{ textDecoration: "none" }}>
              <li className="toolbar_item" onClick={() => props.to_top()}>
                About
              </li>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="toolbar_item" onClick={() => props.to_top()}>
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="call_toolbar">
          {/* <img src={phone} alt="phone icon" className="phone_icon" /> */}
          <a
            data-replaceable-phone-dialable=""
            className="toolbar_item"
            href="tel:8558700077"
          >
            <span className="button" id="toolbar_button">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default toolbar;
