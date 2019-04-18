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
        <ul className="row footer_links">
          <Link to="/About" style={{ textDecoration: "none" }}>
            <li>About Us</li>
          </Link>
          <span>|</span>
          <Link to="/dental" style={{ textDecoration: "none" }}>
            <li>Dental</li>
          </Link>
          <span>|</span>
          {/* <Link to="/About" style={{ textDecoration: "none" }}> */}
          <li>Contact US</li>
          {/* </Link> */}
        </ul>
        <div className="row">
          <p>Speak to a Benefit Advisor!</p>
          <div className="row">
            <img className="footer_phone" src={phone} alt="phone icon" />
            <a
              data-replaceable-phone-dialable=""
              className="footer_number"
              href="tel:"
            >
              <span>1-456-789-234</span>
            </a>
          </div>
        </div>
        <div className="social_media_wrapper">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="footer_logo" src={logo} alt="" />
          </Link>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/CareFreeDirect"
            >
              <img className="social_media_icon" src={fb} alt="" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/carefree_direct"
            >
              <img className="social_media_icon" src={ig} alt="" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.linkedin.com/company/carefree-direct"
            >
              <img className="social_media_icon" src={linked} alt="" />
            </a>
          </div>
        </div>
        <p className="footer_copyright">
          © CareFree Direct All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
