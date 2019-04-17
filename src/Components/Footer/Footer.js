import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/logo_white.svg";
import phone from "../../assets/phone.png";
import fb from "../../assets/fb_icon.png";
import ig from "../../assets/ig_icon.png";
import linked from "../../assets/in_icon.png";

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
          <p className="">Speak to a Benefit Advisor!</p>
          <div className="row">
            <img className="footer_phone" src={phone} alt="phone icon" />
            <a
              data-replaceable-phone-dialable=""
              className="footer_number"
              href="tel:"
            >
              <span className="">
                <span className="">1-456-789-234</span>
              </span>
            </a>
          </div>
        </div>
        <div className="social_media_wrapper">
          <img className="footer_logo" src={logo} alt="" />
          <div className="">
            <img className="social_media_icon" src={fb} alt="" />
            <img className="social_media_icon" src={ig} alt="" />
            <img className="social_media_icon" src={linked} alt="" />
          </div>
        </div>
        <p className="footer_copyright">© CareFree Direct. All Rights Reserved.</p>
      </div>
    </div>
  );
}
