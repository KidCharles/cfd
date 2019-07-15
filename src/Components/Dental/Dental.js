import React from "react";
import "../Home/Home.css";
import "../../App.css";
import "./dental.css";

import Call from "../CallCTA/Callcta";
import Button from "../Button/Button";

export default function About(props) {
  return (
    <div className="home_wrapper">
      <div className="banner dentalBanner">
        <h1>
          You could be missing out on <br />
          enhanced benefits!
        </h1>
        <p>
          Exams and Cleanings, Oral Surgery, Crowns,
          <br />
          Dentures, Fillings, Simple Extractions
        </p>
        <a
          data-replaceable-phone-dialable=""
          href="tel:18558700077"
          style={{ textDecoration: "none" }}
        >
          <span className="button">Do I qualify?</span>
        </a>
      </div>
      <div className="text_container">
        <h1 className="title">
          Why do I need dental and vision insurance coverage?
        </h1>
        <p className="large_body">
          If you are in the market for dental and vision insurance and find
          yourself asking, "Why do I need it?" consider the advantages to your
          overall health. Our oral and ocular health can be key indicators in
          detecting early stages of many health risks and diseases along with
          preventing many other health issues.
        </p>
        <br />
        <h1 className="title">
          CareFree Direct understands that your needs are unique
        </h1>
        <p className="large_body">
          We're committed to finding you the dental and vision plans that meets
          your needs. Our dental and vision insurance plans offer affordable
          coverage with instant free online quotes, coverage for individuals 18+
          (including seniors), no online enrollment fees and a broad dental
          network.
        </p>
        <div className="whiteSpace48" />
        <Button
          link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
          text={"See Dental Plans"}
        />
        <h1 className="title">Dental / Vision / Hearing</h1>
        <br />
        <br />
        <p className="large_body">
          CareFree Direct has a team of courteous and knowledgeable licensed
          agents that can share additional insights on your Medicare coverage
          options and find the right plan for you. If you're unsure of what type
          of Medicare coverage would best suit your needs, don't hesitate to
          call us to speak with a CareFree Direct licensed agent to assist in
          finding the right coverage to meet your needs.
        </p>
      </div>
      <div className="whiteSpace64" />
      <Call />
      <div className="pic2" />
    </div>
  );
}
