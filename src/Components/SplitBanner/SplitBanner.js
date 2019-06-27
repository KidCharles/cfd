import React from "react";
import "./SplitBanner.css";

export default function SplitBanner(props) {
  return (
    <div className="">
      <div className="layout">
        <div className="layout_text">
          <h1>Find the right health care solutions</h1>
          <p>
            Our licensed broker professionals will not only guide you to your
            ideal plan, but they will be your ongoing support for all your
            health plan needs.
          </p>
        </div>
        <div className="layout_img">
          <div />
          {/* <a
            data-replaceable-phone-dialable=""
            href="tel:18558700077"
          > */}
            <img src="https://i.imgur.com/CJfws56.png" alt="Phone graphic" />
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}
