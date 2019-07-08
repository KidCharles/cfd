import React from "react";
import "../Home/Home.css";
import "../../App.css";
import "./About.css";
import "../Careers/careers.css";

// import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";
// import Button from "../Button/Button";

export default function About(props) {
  return (
    <div className="home_wrapper">
      <Banner
        title={"CAREFREE DIRECT"}
        text={
          "We work hard to find the right health care solutions, so you don’t have to."
        }
        pic1={"pic1"}
      />
      <div className="careers_wrapper">
        <div className="split_container">
          <div className="textHalf">
            <h1>Why CareFree Direct?</h1>
            <p className="quote">"Health CARE, not just health insurance."</p>
            <p>
              Carefree Direct is a leading healthcare insurance agency. Our
              Brokers empower consumers to confidently make sound decisions with
              ease regarding their health insurance options while eliminating
              unnecessary difficulties.
            </p>
          </div>
          <div className="imgHalf">
            <img src="https://i.imgur.com/gahGYgf.jpg" alt="agent" />
          </div>
        </div>
        <div className="split_container reverse">
          <div className="imgHalf">
            <img src="https://i.imgur.com/syNXTfC.jpg" alt="agent" />
          </div>
          <div className="textHalf">
            <p>
              With nearly 4,000 new members a month trusting Carefree to guide
              them in their healthcare decisions, we have quickly become one of
              the fastest growing agencies in America.
              <br />
              <br />
              Understanding each member’s unique situation, providing a unique
              solution for protection and bringing value to their life is a core
              value for Carefree and each of its brokers.
            </p>
          </div>
        </div>
        <div className="split_container">
          <div className="textHalf">
            <p>
              Established in 2013, CareFree Direct is comprised of employees who
              are encouraged professional Brokers with a firm commitment to
              ethical business conduct. We offer quality health care from
              numerous companies within the Fortune 500 and a footprint that
              expands across the United States. We are devoted to our
              ever-growing list of Medicare recipients to ensure they receive
              proper care by providing a health plan to suit their budget while
              fulfilling their health care needs.
            </p>
          </div>
          <div className="imgHalf">
            <img src="https://i.imgur.com/KSFQCLe.jpg" alt="agent" />
            <h1 className="imgHalfTitle">
              We find the right health care solution so you don’t have to.
            </h1>
          </div>
        </div>
        <div className="split_container reverse">
          <div className="imgHalf">
            <img src="https://i.imgur.com/vHU2AZS.jpg" alt="agent" />
          </div>
          <div className="textHalf">
            <p>
              Our managed care programs will provide necessary benefits to
              maintain your health, with some plans offering notable extras such
              as gym memberships or even resources for assistance on those
              endless utility bills.
            </p>
          </div>
        </div>
        <div className="split_container">
          <div className="textHalf">
            <h1>Our Agents</h1>
            <p>
              In today’s world, you can’t just trust your health to anyone. Our
              licensed broker professionals will not only guide you to your
              ideal plan, but they will be your ongoing support for all your
              health plan needs.
            </p>
          </div>
          <div className="imgHalf">
            <img src="https://i.imgur.com/hGXrIVL.jpg" alt="agent" />
          </div>
        </div>
      </div>
    </div>
  );
}
