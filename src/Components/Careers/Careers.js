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
            <p>- First and Last name</p>
            <p>- Location</p>
            <p>- Prior Insurance Experience</p>
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
      <h1 className="full_title">
        Accomodations and Equal Opportunity Employment
      </h1>
      <p className="full_body">
        If you are interested in applying for employment with CareFree Direct and need
        special assistance or an accommodation to apply for a posted position,
        contact us at: info@mycarefree.com.
      </p>
      <p className="full_body">
        CareFree Direct is an Equal Employment Opportunity employer. It is our policy to
        provide equal opportunity to all employees and applicants and to
        prohibit any discrimination because of race, color, religion, sex,
        national origin, age, marital status, sexual orientation, genetic
        information, disability, protected veteran status, or any other
        consideration made unlawful by applicable federal, state or local laws.
        The foundation of these policies is our commitment to treat everyone
        fairly and equally and to have a bias-free work environment.
      </p>
      </div>
      <div className="pic6" />
    </div>
  );
}
