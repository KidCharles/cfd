import React from "react";
import "./Nav.css";
import Hamburger from "../Toolbar/ToolbarToggleButton.js";
import icon from "../../assets/logos/Icon.svg";
import iconDark from "../../assets/logos/CareFreeDirect_Logo_full_small.png";
import logo_white from "../../assets/logos/logo_white.svg";
import { Link } from "react-router-dom";

export default function Nav(props) {
  // let LogoWhite =
  //   "https://drive.google.com/uc?export=view&id=1MxzEsrjoHWjkiLOyarVs7IvdcGwn4HSe";
  let nav_wrapper_class = "nav_wrapper";
  let items_nav = "items_nav";
  let nav_number_scrolled = "nav_number";
  // let logo = LogoWhite;
  let logo = logo_white;
  if (props.scrolled) {
    nav_wrapper_class = "nav_wrapper scrolled";
    items_nav = "items_nav nav_text_scrolled ";
    nav_number_scrolled = "nav_number_scrolled";
  }
  if (!props.scrolled) {
    logo = iconDark;
  }
  return (
    <div className={nav_wrapper_class}>
      <div>
        <Link to="/">
          <img
            src={icon}
            alt="CareFree Direct Icon"
            className="cfd_icon_mobile"
          />
        </Link>
        <Link to="/">
          <img src={logo} alt="CareFree Direct Logo" className="cfd_logo" />
        </Link>
      </div>
      <div className="hamburger">
        <Hamburger click={props.toolbarToggleClickHandler} />
      </div>
      <div className={items_nav}>
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
            {/* <a
              data-replaceable-phone-dialable=""
              className={nav_number_scrolled}
              href="tel:18558700077"
            > */}
            1-855-870-0077
            {/* </a> */}
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
