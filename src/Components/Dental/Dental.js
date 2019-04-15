import React from "react";
import "../../Components/About/About.css";
import "../../App.css";

import banner from "../../assets/logos/cfd_banner_left.png";
import Call from "../CallCTA/Callcta";

export default function About(props) {
  return (
    <div>
      <img src={banner} alt="CareFree Direct Banner" className="cfd_banner" />
      <div className="text_block">
        <h1 className="title">Need Dental?</h1>
        <p className="large_body">
          We partner with Provider Organizations and Insurance Carriers to
          provide world class service to their members and prospects.
        </p>
        <br />
        <p className="large_body">
          We specialize in not only SELLING, but RETAINING members through
          direct and ongoing communication
        </p>
        <br />
        <p className="large_body">
          We excel in exceeding clients goals by understanding objectives, and
          pivoting real-time to drive superior outcomes
        </p>
        <div className="whiteSpace64" />
        <Call/>
      </div>
    </div>
  );
}
