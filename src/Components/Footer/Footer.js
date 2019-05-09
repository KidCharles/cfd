import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/logo_white.svg";
import phone from "../../assets/phone.png";
import fb from "../../assets/fb_icon.png";
import ig from "../../assets/ig_icon.png";
import linked from "../../assets/in_icon.png";

export default function Footer(props) {
  let top_button = props.top_button;
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div className="top_container">{top_button}</div>
        <ul>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <li> About Us</li>
          </Link>
          <span>|</span>
          <Link to="/dental" style={{ textDecoration: "none" }}>
            <li>Dental</li>
          </Link>
          <span>|</span>
          <Link to="/vision" style={{ textDecoration: "none" }}>
            <li>Vision</li>
          </Link>
          <span>|</span>
          <a
            href="mailto:cfdirect@mycarefree.com"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <li>Contact</li>
          </a>
        </ul>
        <div className="footer_cta">
          <p>Speak to a Benefit Advisor!</p>
          <div>
            <img className="footer_phone" src={phone} alt="phone icon" />
          </div>
          <a
            data-replaceable-phone-dialable=""
            className="footer_number"
            href="tel:18558700077"
          >
            <span className="">1-855-870-0077</span>
          </a>
        </div>
        <div className="social_media_wrapper">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              className="footer_logo"
              src={logo}
              alt="Carefree Direct Logo"
            />
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
              href="https://www.linkedin.com/company/carefree-direct"
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
