import React from "react";

import "./Banner.css";
import "../../App.css";
import Button from "../Button/Button";

export default function Banner(props) {
  let title = props.title;
  let text = props.text;
  let link = props.link;
  let btnText = props.btnText;
  let pic1 = props.pic1;
  let medical = props.medical;
  let dentalPic = props.dentalPic;
  let bannerClass = "bannerWrapper";
  let buttonClass = "dontshow";
  let visionKid = props.visionKid;
  let dental_kid = props.dental_kid;
  let dental_button = props.dental_button;
  if (props.btnText) {
    buttonClass = "";
  }
  if (pic1) {
    bannerClass = "bannerWrapper pic1";
  }
  if (medical) {
    bannerClass = "bannerWrapper medical";
  }
  if(dentalPic) {
    bannerClass="bannerWrapper dentalPic"
  }
  if(visionKid) {
    bannerClass="bannerWrapper visionKid"
  }
  if(dental_kid) {
    bannerClass="bannerWrapper dental_kid"
  }

  return (
    <div className={bannerClass}>
      <div className="text_container">
        <h1 className="bannerTitle">{title}</h1>
        <p className="bannerText">{text}</p>
      </div>
      <div className="whiteSpace32" />
      <div className={buttonClass}>
        <Button link={link} text={btnText} dental_button={dental_button}/>
      </div>
    </div>
  );
}
