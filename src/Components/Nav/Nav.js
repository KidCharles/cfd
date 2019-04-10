import React from "react";
import "./Nav.css";
import Hamburger from "../Toolbar/ToolbarToggleButton.js";
import LogoWhite from '../../assets/logos/logo_white.svg';
import icon from '../../assets/logos/Icon.svg';

export default function Nav(props) {
  return (
    <div className="nav_wrapper">
      <img src={LogoWhite} alt='CareFree Direct Logo' className='cfd_logo'/>
      <img src={icon} alt='CareFree Direct Icon' className='cfd_icon_mobile'/>
      <div className="hamburger">
        <Hamburger click = {props.toolbarToggleClickHandler}/>
      </div>
      <div className="items_nav">
        <ul>
          <li className="">About</li>
          <li className="">Dental</li>
          <li className="">Medicare</li>
        </ul>
      </div>
    </div>
  );
}
