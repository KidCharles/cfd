// import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import "../Careers/careers.css";
// import "../../App.css";
import Call from "../CallCTA/Callcta";
import Button from "../Button/Button";
import Product from "../Product/Product.js";
import Split from "../SplitBanner/SplitBanner.js";
import { Link } from "react-router-dom";
import HowItWorks from "../HowItWorks/HowItWorks";

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
      <div ref="home">
        <div className="banner homeBanner">
          <img src="https://i.imgur.com/W3mepnU.png" alt="CFD logo overlay" />
          <p className="quote">"Healthcare, not just health insurance."</p>
        </div>
        <Split />
        <HowItWorks />
        <div className="banner homeCall">
          <div>
            <h1>Questions About Benefits?</h1>
            <p>Talk to your Agent to find out what you're missing out on.</p>
            <div>
              <span className="button">Talk to your Agent</span>
            </div>
          </div>
          <div />
        </div>
        <div className="full_container">
          <div className="mission">
            <h1 className="full_title_center">OUR MISSION</h1>
            <p className="quote">
              "At CareFree Direct, We find the right healthcare solutions, so
              you don't have to."
            </p>
          </div>
          <div className="plansAgentsMembers">
            <div>
              <h1 className="full_title">MEDICARE PLANS</h1>
              <p className="full_body">
                We give our members the accessibility to Medicare Plans suited
                to their needs and requirements. With years of experience, we’ve
                come to understand each of our members’ unique Medicare needs.
                With CareFree Direct, your Medicare process will be hassle-free
                and easy to understand.
              </p>
            </div>
            <div>
              <img
                src="https://i.imgur.com/jyCeC3S.jpg"
                alt="Medicare couple"
              />
            </div>
          </div>

          <div className="plansAgentsMembers agents">
            <div>
              <h1 className="full_title">OUR LICENSED AGENTS</h1>
              <p className="full_body">
                It’s important to keep yourself protected. That is why CareFree
                Direct provides Licensed Health Insurance Agents at no cost,
                with freedom of mind that you and your family live your lives
                free of worries. Contact one of our Benefits Advisors today to
                understand more about what Medicare Plans are available to you
                and let us do all the work so you can relax for a change.
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/ngIIQ7Y.png" alt="Agents" />
            </div>
          </div>

          <div className="plansAgentsMembers">
            <div>
              <h1 className="full_title">OUR MEMBERS</h1>
              <p className="full_body">
                To avoid unnecessary worry about what the future holds, we
                ensure that you are covered. With established relationships with
                numerous carriers, let us put together a Medicare Plan that
                offers the highest beneficial protection for you. Contact us to
                make an appointment with one of our Licensed Agents. We provide
                coverage options at no cost to you, we’re here to supply you
                with the Medicare you need.
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/h49MTd2.jpg" alt="Members" />
            </div>
          </div>
          <div className="carrierContainer">
            <h1 className="full_title_center">OUR CARRIERS</h1>
            <p className="quote">
              CareFree Direct Works with Leading Health Plans
            </p>
            <div className="carrierBanner">
              <img src="" alt="Aetna Logo" />
              <img src="" alt="CareSource Logo" />
              <img src="" alt="Stanford Logo" />
              <img src="" alt="United Health Care Logo" />
              <img src="" alt="Humana Logo" />
              <img src="" alt="Cigna Logo" />
              <img src="" alt="Mutual of Omaha Logo" />
              <img src="" alt="Blue Cross Blue Shield Logo" />
              <img src="" alt="Medico Logo" />
              <img src="" alt="Ameritas Logo" />
            </div>
          </div>
          <h1 className="full_title_center">OUR PRODUCTS</h1>
          <p className="quote">Medicare coverage that best suits your needs.</p>
          <Product />
        </div>

        <div className="banner homePromo">
          <h1 className="">Amazing Dental Support</h1>
          <p>
            Our Advisors will answer any questions you may have about benefits
            you could be missing out on.
          </p>
          <span className="button">Get a Free Quote</span>
        </div>
        <div className="home_wrapper">
          <div className="text_container">
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
            <h1 className="title">CareFree Direct can help!</h1>
            <p className="large_body">
              CareFree Direct has a team of courteous and knowledgeable licensed
              agents that can share additional insights on your Medicare
              coverage options and find the right plan for you. If you're unsure
              of what type of Medicare coverage would best suit your needs,
              don't hesitate to call us to speak with a CareFree Direct licensed
              agent to assist in finding the right coverage to meet your needs.
            </p>
            <div className="whiteSpace48" />
            <Button
              link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
              text={"Get A Free Quote"}
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
                  <span className="button1" onClick={() => this.toTop()}>
                    Medicare
                  </span>
                </Link>
              </div>
              <div>
                <img
                  src="https://i.imgur.com/Qtyit5H.jpg"
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
                  <span className="button1" onClick={() => this.toTop()}>
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
                  <span className="button1" onClick={() => this.toTop()}>
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
                  <span className="button1" onClick={() => this.toTop()}>
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
