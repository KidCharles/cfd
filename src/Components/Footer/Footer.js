import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/logo_white.svg";

export default function Footer(props) {
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <ul className="row">
          <Link to="/About" style={{ textDecoration: "none" }}>
            <li className="">About Us</li>
          </Link>
            <li className="">|</li>
          <Link to="/dental" style={{ textDecoration: "none" }}>
            <li className="">Dental</li>
          </Link>
          <li className="">|</li>
          {/* <Link to="/About" style={{ textDecoration: "none" }}> */}
          <li className="">Contact US</li>
          {/* </Link> */}
        </ul>
        <div className="row">
          <p className="">Call to speak to a Licensed Benefit Advisor!</p>
          <img className="" src="" alt="" />
          <p className="">1-555-555-5555</p>
        </div>
        <div className="">
          <img className="footer_logo" src={logo} alt="" />
          <div className="social_media_wrapper">
            <img className="social_media_icon" src="" alt="" />
            <img className="" src="" alt="" />
            <img className="" src="" alt="" />
          </div>
        </div>
        <p className="">© CareFree Direct. All Rights Reserved.</p>
      </div>
    </div>
  );
}
