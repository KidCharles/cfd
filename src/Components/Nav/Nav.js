import React from "react";
import "./Nav.css";
import Hamburger from "../Toolbar/ToolbarToggleButton.js";
import LogoWhite from "../../assets/logos/logo_white.svg";
import icon from "../../assets/logos/Icon.svg";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav_wrapper">
      <Link to="/">
        <img src={LogoWhite} alt="CareFree Direct Logo" className="cfd_logo" />
      </Link>
      <Link to="/">
        <img
          src={icon}
          alt="CareFree Direct Icon"
          className="cfd_icon_mobile"
        />
      </Link>
      <div className="hamburger">
        <Hamburger click={props.toolbarToggleClickHandler} />
      </div>
      <div className="items_nav">
        <ul>
          <Link to="/About">
            <li className="">About</li>
          </Link>
          <li className="">Dental</li>
          <li className="">Medicare</li>
        </ul>
      </div>
    </div>
  );
}
