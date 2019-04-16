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
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
          <Link to="/dental" style={{ textDecoration: "none" }}>
            <li className="">Dental</li>
          </Link>
          <Link to="/medicare" style={{ textDecoration: "none" }}>
            <li className="">Medicare</li>
          </Link>
          <li className="">1-555-555-5555</li>
        </ul>
      </div>
    </div>
  );
}
