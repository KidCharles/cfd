import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import "../Careers/careers.css";
import Call from "../CallCTA/Callcta";
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
            <p>
              Talk to your Licensed Agent to find out what you're missing out
              on.
            </p>
            <div>
              <a
                data-replaceable-phone-dialable=""
                href="tel:18558700077"
                style={{ textDecoration: "none" }}
              >
                <span className="button">Talk to your Agent</span>
              </a>
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
                src="https://i.imgur.com/cyGcpmB.jpg"
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
                with peace of mind that you and your family live your lives free
                of worries. Contact one of our Benefits Advisors today to
                understand more about your Medicare coverage options available
                to you and let us do all the work so you can relax for a change.
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/CQdptSz.jpg" alt="Agents" />
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
              <img src="https://i.imgur.com/HxIADg7.jpg" alt="Members" />
            </div>
          </div>
          <div className="carrierContainer">
            <h1 className="full_title_center">OUR CARRIERS</h1>
            <p className="quote">
              CareFree Direct Works with Leading Health Plans
            </p>
            <div className="carrierBanner">
              <img src="https://i.imgur.com/FiFWlTP.png" alt="Aetna Logo" />
              <img
                src="https://i.imgur.com/wQ1Ge4A.png"
                alt="CareSource Logo"
              />
              <img src="https://i.imgur.com/sdIIiC8.png" alt="Stanford Logo" />
              <img
                src="https://i.imgur.com/bw5wp28.png"
                alt="United Health Care Logo"
              />
              <img src="https://i.imgur.com/zuVi0BF.png" alt="Humana Logo" />
              <img
                src="https://i.imgur.com/KO5WMCS.png"
                alt="Cigna Logo"
                className="smallerIcon"
              />
              <img
                src="https://i.imgur.com/DsY0Z00.png"
                className="smallerIcon"
                alt="Mutual of Omaha Logo"
              />
              <img
                src="https://i.imgur.com/pnafXAx.png"
                alt="Blue Cross Blue Shield Logo"
                className="smallerIcon"
              />
              <img src="https://i.imgur.com/kmpGQVE.png" alt="Medico Logo" />
              <img src="https://i.imgur.com/Tbd5RtT.png" alt="Ameritas Logo" />
            </div>
          </div>
          <h1 className="full_title_center">OUR PRODUCTS</h1>
          <p className="quote">Medicare coverage that best suits your needs.</p>
          <Product />
        </div>

        {/* <div className="banner homePromo">
          <h1 className="">Amazing Dental Support</h1>
          <p>
            Our Advisors will answer any questions you may have about benefits
            you could be missing out on.
          </p>
          <span className="button">Get a Free Quote</span>
        </div> */}

        <div className="banner homePromo">
          <div />
          <div>
            <h1>Amazing Dental Support</h1>
            <p>
              Our Advisors will answer any questions you may have about benefits
              you could be missing out on.
            </p>
            <div>
              <a
                data-replaceable-phone-dialable=""
                href="tel:18558700077"
                style={{ textDecoration: "none" }}
              >
                <span className="button">Get a Free Quote</span>
              </a>
            </div>
          </div>
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
            {/* <Button
              link={"https://www.securitylife.com/personal-plans?agnt=010S0582"}
              text={"Get A Free Quote"}
            /> */}
            <a
              data-replaceable-phone-dialable=""
              href="tel:18558700077"
              style={{ textDecoration: "none" }}
            >
              <span className="button">Get a Free Quote</span>
            </a>
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
                  src="https://i.imgur.com/Ppag9Pz.jpg"
                  alt="Couple walking with dog"
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
            <div className="privacy">
              <div>
                <p>
                  By contacting us you consent to be contacted via automatic
                  telephone dialing system, by artificial voice and/or
                  pre-recorded message, or by text message at the telephone
                  number you provided above and receive email at the email
                  address you provided above from or on behalf of CareFree
                  Direct, insurance carriers or their agents, and partner
                  companies. You are under no obligation to purchase any goods
                  or services as a result of this action. You understand that
                  consent is not a condition of purchase and you may also
                  receive a quote by contacting us via phone. You may revoke
                  consent at any time.
                </p>
                <p>
                  CareFree Direct does not charge you for sending or receiving
                  text messages. Your carrier's message and data rates may
                  apply. By using this form you agree to the terms of our
                  Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
