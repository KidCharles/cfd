import React from "react";
import "../Home/Home.css";
import "../../App.css";
import "./About.css";
import "../Careers/careers.css";

export default function About(props) {
  return (
    <div className="home_wrapper about_wrapper">
      <div className="banner aboutBanner">
        <h1>CAREFREE DIRECT</h1>
        <p>
          We work hard to find the right Medicare and healthcare solutions,{" "}
          <br />
          so you don’t have to.
        </p>
      </div>
      <div>
        <div className="aboutContainer">
          <div>
            <h1 className="full_title">CareFree Direct</h1>
            <p className="quote">"Healthcare, not just health insurance."</p>
            <p className="large_body">
              CareFree Direct has a team of courteous and knowledgeable licensed
              agents that can share additional insights on your Medicare
              coverage options and find the right plan for you.
            </p>
          </div>
          <div>
            <img
              src="https://i.imgur.com/nBv1EEK.png"
              alt="CareFree Direct Logo"
            />
          </div>
        </div>
        <div className="aboutContainer">
          <div>
            <p className="large_body">
              If you're unsure of what type of Medicare coverage best suits your
              needs, one phone call with a knowledgeable CareFree Direct
              licensed agent will help answer your questions and enroll you in a
              plan that best meets your needs.
            </p>
            <br />
            <p className="large_body">
              CareFree Direct’s service doesn’t end after your enrollment in a
              Medicare plan. Our licensed benefit advisors will provide ongoing
              support for the duration of your coverage. Our team will ensure
              your selected plan continues to meet your healthcare needs as your
              benefit needs evolve and available coverage options change.
            </p>
            <br />
            <p className="large_body">
              We’ll be available to provide information to help with provider
              network questions, drug coverage questions, and general benefit
              questions about your coverage. We’re here to help and we look
              forward to serving you.
            </p>
            <br />
            <div>
              <h1 className="title">Helpful Resources</h1>
              <p className="large_body">
                Here are some helpful links to answer questions and prepare you
                to make informed decisions regarding your Healthcare coverage.
              </p>
              <div className="resourceLinks">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.medicare.gov/sites/default/files/2018-09/10050-medicare-and-you.pdf"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    <span>•</span> 2019 Medicare and You Handbook
                  </p>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.kff.org/medicare/issue-brief/an-overview-of-medicare/"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    <span>•</span>An Overview of Medicare
                  </p>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.kff.org/tag/medicare-advantage/"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    <span>•</span>Medicare Advantage Overview
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="split_container reverse">
          <div className="imgHalf">
            <img src="https://i.imgur.com/XE6HJRy.jpg" alt="man with briefcase" />
          </div>
          <div className="textHalf">
            <p>
              If you're unsure of what type of Medicare coverage would best suit
              your needs, don't hesitate to call us to speak with a CareFree
              Direct licensed agent to assist in finding the right coverage to
              meet your needs.
              <br />
              <br />
              Understanding each member’s unique situation, providing a unique
              solution for protection and bringing value to their life is a core
              value for Carefree and each of its brokers.
            </p>
          </div>
        </div> */}
        {/* <div className="split_container">
          <div className="textHalf">
            <p>
              Established in 2013, CareFree Direct is comprised of employees who
              are encouraged professional Brokers with a firm commitment to
              ethical business conduct. We offer quality healthcare from
              numerous companies within the Fortune 500 and a footprint that
              expands across the United States. We are devoted to our
              ever-growing list of Medicare recipients to ensure they receive
              proper care by providing a health plan to suit their budget while
              fulfilling their health care needs.
            </p>
          </div>
          <div className="imgHalf">
            <img src="https://i.imgur.com/er6904e.jpg" alt="Meeting at a table" />
            <h1 className="imgHalfTitle">
              We find the right health care solution so you don’t have to.
            </h1>
          </div>
        </div>
        <div className="split_container reverse">
          <div className="imgHalf">
            <img src="https://i.imgur.com/TPxrSY1.jpg" alt="office space" />
          </div>
          <div className="textHalf">
            <p>
              Our managed Medicare and health care programs will provide necessary benefits to
              maintain your health, with some plans offering notable extras such
              as vision, dental, hearing, gym memberships, and even resources for assistance on those
              endless utility bills.
            </p>
          </div>
        </div>
        <div className="split_container">
          <div className="textHalf">
            <h1>Our Agents</h1>
            <p>
              In today’s world, you can’t just trust your health to anyone. Our
              Licensed Benefits Advisors will not only guide you to your
              ideal plan, but they will be your ongoing support for all your
              health plan needs.
            </p>
          </div>
          <div className="imgHalf">
            <img src="https://i.imgur.com/0WRgt1I.jpg" alt="agent on phone" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
