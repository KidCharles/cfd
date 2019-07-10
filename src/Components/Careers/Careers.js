import React from "react";
import "./careers.css";
// import Button from "../Button/Button";

export default function Careers(props) {
  return (
    <div>
      <div className="careers_wrapper">
        <div className="split_container">
          <div>
            <h1>Interested in joining the CareFree Direct Team?</h1>
            <p>
              Reach out to our recruiting team by emailing us at
              careers@mycarefree.com
            </p>
            <a
              href="mailto:careers@mycarefree.com"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <span className="button">Email us</span>
            </a>
          </div>
          <div>
            <img src="https://i.imgur.com/04PbaMu.jpg" alt="agent" />
          </div>
        </div>
        <div className="split_container reverse">
          <div>
            <img src="https://i.imgur.com/vHU2AZS.jpg" alt="agent" />
          </div>
          <div>
            <h1>Application Email</h1>
            <p>Be sure to include:</p>
            <p>-  First and Last name</p>
            <p>-  Location</p>
            <p>-  Prior Insurance Experience</p>
          </div>
        </div>
        <div className="split_container">
          <div>
            <h1>Teamwork Culture</h1>
            <p>We work together to reach our goals.</p>
          </div>
          <div>
            <img
              src="https://i.imgur.com/TdJfrP3.jpg"
              alt="jumping on a hill"
            />
          </div>
        </div>
      </div>
      <div className="pic6" />
    </div>
  );
}
