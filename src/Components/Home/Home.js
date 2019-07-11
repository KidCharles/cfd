// import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import "../Careers/careers.css";
// import "../../App.css";
import Call from "../CallCTA/Callcta";
import Banner from "..//Banner/Banner";
import Button from "../Button/Button";
import Product from "../Product/Product.js";
import Split from "../SplitBanner/SplitBanner.js";
import { Link } from "react-router-dom";

export default class Home extends Component {
  handleScrollToElement(e) {
    const tesNode = ReactDOM.findDOMNode(this.refs[e]);
    window.scrollTo({ top: tesNode.offsetTop, behavior: "smooth" });
  }
  toTop = () => {
    this.handleScrollToElement("home");
  };

  render() {
    return (
      <div className="" ref="home">
        <div className="pic">
          <img src="https://i.imgur.com/R2UDOX1.png" alt="CFD logo overlay" />
          <p className="quote">"Healthcare, not just health insurance."</p>
        </div>
        <Split />
        <div className="full_container">
          <h1 className="full_title">Why CareFree Direct?</h1>
          <p className="full_body">
            We find the right healthcare solutions, so you don't have to. Find a
            health plan to suit your budget while fulfilling your healthcare
            needs.
          </p>
          <p className="full_body">
            CareFree Direct has a team of courteous and knowledgeable licensed
            agents that can share additional insights on your Medicare coverage
            options and find the right plan for you
          </p>
          <div className="products_container">
            <Product />
          </div>
        </div>
        <Banner
          dental_kid={" "}
          btnText={"Get a Quote"}
          title={"Amazing Dental Support"}
          link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
        />
        <div className="home_wrapper">
          <div className="text_container">
            <h1 className="title">CareFree Direct can help!</h1>
            <p className="large_body">
              CareFree Direct has a team of courteous and knowledgeable licensed
              agents that can share additional insights on your Medicare
              coverage options and find the right plan for you. If you're unsure
              of what type of Medicare coverage would best suit your needs,
              don't hesitate to call us to speak with a CareFree Direct licensed
              agent to assist in finding the right coverage to meet your needs.
            </p>
            <h1 className="title">Get the most from your Medicare Plan</h1>
            <p className="large_body">
              Get the absolute most from your <span>Medicare Plan</span>. You
              may be missing out on a ton of benefits like <span>dentures</span>
              , <span>crowns</span>, <span>root canals</span>,
              <span> fillings</span>, <span>extractions</span> and other dental
              services at a <span>discounted or no cost rate</span> . Most
              dental plans only cover cleaning, twice a year! You deserve better
              than that. To ensure that you're being taken care of, get a
              personalized quote for a dental plan today or speak to one of
              CareFree Direct's Licensed Benefit Advisors.
            </p>
            <div className="whiteSpace48" />
            <Button
              link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
              text={"Get A Quote"}
            />
            <div className="whiteSpace48" />
          </div>
          <div className="careers_wrapper">
            <div className="split_container">
              <div>
                <h1>Learn More about Medicare</h1>
                <p className="quote">
                  "Healthcare, not just health insurance."
                </p>
                <Link to="/medicare" style={{ textDecoration: "none" }}>
                  <span className="button" onClick={() => this.toTop()}>
                    Medicare
                  </span>
                </Link>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/W2pJi9O.jpg"
                  alt="Ladies laughing on bench"
                />
              </div>
            </div>
            <div className="split_container reverse">
              <div>
                <img src="https://i.imgur.com/Mlac7xo.jpg" alt="dentures" />
              </div>
              <div>
                <h1>Learn More about Dental</h1>
                <p className="quote">
                  "Finding dental and vision insurance to meet your needs
                  doesn't have to be difficult. Let us help!"
                </p>
                <Link to="/dental" style={{ textDecoration: "none" }}>
                  <span className="button" onClick={() => this.toTop()}>
                    Dental
                  </span>
                </Link>
              </div>
            </div>
            <div className="split_container">
              <div>
                <h1>Learn More about Vision / Hearing</h1>
                <p className="quote">
                  "Getting help with hearing loss can be confusing and
                  expensive. That’s where CareFree Direct comes in."
                </p>
                <Link to="/vision" style={{ textDecoration: "none" }}>
                  <span className="button" onClick={() => this.toTop()}>
                    Vision / Hearing
                  </span>
                </Link>
              </div>
              <div>
                <img src="https://i.imgur.com/tw7tNQN.jpg" alt="eye test" />
              </div>
            </div>
            <div className="split_container reverse">
              <div>
                <img src="https://i.imgur.com/qeeItgJ.jpg" alt="agent" />
              </div>
              <div>
                <h1>Learn More about CareFree Direct</h1>
                <p className="quote">
                  "We work hard to find the right Medicare and healthcare
                  solutions, so you don’t have to."
                </p>
                <Link to="/About" style={{ textDecoration: "none" }}>
                  <span className="button" onClick={() => this.toTop()}>
                    About Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="full">
            <Call />
          </div>
        </div>
      </div>
    );
  }
}
