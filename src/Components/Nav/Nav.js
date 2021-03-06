import React from "react";
import "./Nav.css";
import Hamburger from "../Toolbar/ToolbarToggleButton.js";
import { Link } from "react-router-dom";

export default function Nav(props) {
  let nav_wrapper_class = "nav_wrapper";
  let items_nav = "items_nav";
  let logo_white = "https://i.imgur.com/hpOyKyC.png";
  let logo_dark = "https://i.imgur.com/zElzlxW.png";
  let icon = "https://i.imgur.com/gCNeJi8.png";
  let logo = logo_white;
  let nav_number_scrolled = "nav_number";
  if (props.scrolled) {
    nav_wrapper_class = "nav_wrapper scrolled";
    items_nav = "items_nav nav_text_scrolled ";
    nav_number_scrolled = "nav_number_scrolled";
  }
  if (!props.scrolled) {
    logo = logo_dark;
  }
  return (
    <div className={nav_wrapper_class}>
      <div>
        <Link to="/">
          <img
            src={icon}
            alt="CareFree Direct Icon"
            className="cfd_icon_mobile"
            onClick={() => props.to_top()}
          />
        </Link>
        <Link to="/">
          <img
            src={logo}
            alt="CareFree Direct Logo"
            className="cfd_logo"
            onClick={() => props.to_top()}
          />
        </Link>
      </div>
      <div className="hamburger">
        <Hamburger click={props.toolbarToggleClickHandler} />
      </div>
      <div className={items_nav}>
        <ul>
          <Link to="/medicare" style={{ textDecoration: "none" }}>
            <li onClick={() => props.to_top()}>Medicare</li>
          </Link>
          <Link to="/dental" style={{ textDecoration: "none" }}>
            <li onClick={() => props.to_top()}>Dental</li>
          </Link>
          <Link to="/vision" style={{ textDecoration: "none" }}>
            <li onClick={() => props.to_top()}>Vision/Hearing</li>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <li onClick={() => props.to_top()}>About Us</li>
          </Link>
          {/* <Link to="/" style={{ textDecoration: "none" }}>
            <li onClick={() => props.to_top()}>Home</li>
          </Link> */}
          <li className="navNumber">
            <a
              data-replaceable-phone-dialable=""
              className={nav_number_scrolled}
              href="tel:18558700077"
            >
              1-855-870-0077 <span>TTY users 711</span>
            </a>
            <ul>
              <li>Available: Mon - Fri, 8 AM - 8 PM</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
