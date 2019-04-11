import React from "react";

import logo from "../../assets/logos/cfd_logo_color.svg";

import "./Call.css";
import "../../App.css";

export default function Callcta(props) {
  return (
    <div className="call_wrapper">
      <img src={logo} alt="cfd Logo" className="logo" />
      <h2 className="call">Call to speak to a Licensed Benefit Advisor</h2>
      <div className='call_box'>
        <h2 className="number">1-456-789-234</h2>
      </div>
    </div>
  );
}
