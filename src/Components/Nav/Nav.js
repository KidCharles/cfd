import React from "react";
import "./Nav.css";
import Hamburger from "../Toolbar/ToolbarToggleButton.js";
import LogoWhite from "../../assets/logos/logo_white.svg";
import icon from "../../assets/logos/Icon.svg";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav_wrapper">
      <div>
        <Link to="/">
          <img
            src={icon}
            alt="CareFree Direct Icon"
            className="cfd_icon_mobile"
          />
        </Link>
        <Link to="/">
          <img
            src={LogoWhite}
            alt="CareFree Direct Logo"
            className="cfd_logo"
          />
        </Link>
      </div>
      <div className="hamburger">
        <Hamburger click={props.toolbarToggleClickHandler} />
      </div>
      <div className="items_nav">
        <ul>
          <Link to="/dental" style={{ textDecoration: "none" }}>
            <li>Dental</li>
          </Link>
          <Link to="/vision" style={{ textDecoration: "none" }}>
            <li>Vision</li>
          </Link>
          <Link to="/medicare" style={{ textDecoration: "none" }}>
            <li>Medicare</li>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
          <li>
            <a
              data-replaceable-phone-dialable=""
              className="nav_number"
              href="tel:18558700077"
            >
              1-855-870-0077
            </a>
            <ul>
              <li>
                Licensed Benefit Advisor are available: Mon - Fri, 7 AM - 7 PM
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
