import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  let logo = "https://i.imgur.com/hpOyKyC.png";
  let phone = "https://i.imgur.com/PhmyHS2.png";
  let fb = "https://i.imgur.com/jOBXFmz.png";
  let ig = "https://i.imgur.com/AfNv3Wi.png";
  let linked = "https://i.imgur.com/1JOMbnX.png";
  let mail = "https://i.imgur.com/k4uSafY.png";

  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <ul>
          <Link to="/medicare" style={{ textDecoration: "none" }}>
            <li onClick={() => props.to_top()}> Medicare</li>
          </Link>
          <span>|</span>
          <Link to="/dental" style={{ textDecoration: "none" }}>
            <li onClick={() => props.to_top()}>Dental</li>
          </Link>
          <span>|</span>
          <Link to="/vision" style={{ textDecoration: "none" }}>
            <li onClick={() => props.to_top()}>Vision/Hearing</li>
          </Link>
        </ul>
        <div>
          <ul>
            <Link to="/About" style={{ textDecoration: "none" }}>
              <li onClick={() => props.to_top()}> About Us</li>
            </Link>
            <span>|</span>
            <a
              href="mailto:cfdirect@mycarefree.com"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="">
          <ul>
            <Link to="/termsPrivacy" style={{ textDecoration: "none" }}>
              <li onClick={() => props.to_top()}> Terms of Use</li>
            </Link>
            <span>|</span>
            <Link to="/termsPrivacy" style={{ textDecoration: "none" }}>
              <li onClick={() => props.to_top()}>Privacy Policy</li>
            </Link>
            <span>|</span>
            <Link to="/careers" style={{ textDecoration: "none" }}>
              <li onClick={() => props.to_top()}>Careers</li>
            </Link>
          </ul>
        </div>
        <div className="footer_cta">
          <p>Speak to a Licensed Benefits Advisor!</p>
          <div>
            <img className="footer_phone" src={phone} alt="phone icon" />
            <a
              data-replaceable-phone-dialable=""
              className="footer_number"
              href="tel:18558700077"
            >
              <span className="">1-855-870-0077</span>
            </a>
          </div>
        </div>
        <div className="social_media_wrapper">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              className="footer_logo"
              src={logo}
              alt="CareFree Direct Logo"
              onClick={() => props.to_top()}
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
            <a
              href="mailto:cfdirect@mycarefree.com"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <img className="social_media_icon" src={mail} alt="" />
            </a>
          </div>
        </div>
        <p className="footer_copyright">
          ©2019 CareFree Direct All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
