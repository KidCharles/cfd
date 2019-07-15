import React from "react";
import "./howItWorks.css";

export default function HowItWorks(props) {
  return (
    <div className="hiwWrapper">
      <div className="hiwContainer">
        <h1>HOW IT WORKS</h1>
        <p>
          Our Agents are a resource for you to ask questions, and will help you
          find the <br />
          best Medicare coverage that suits your needs.
        </p>
      </div>
      <div className="hiwStepContainer">
        <div>
          <img src="https://i.imgur.com/zNDnGp1.png" alt="Agent Icon" />
          <h1>CALL YOUR AGENT</h1>
          <p>
            Feel free to call and speak directly to your new friendly, dedicated
            Agent.
          </p>
        </div>
        <div>
          <img
            src="https://i.imgur.com/N5noyhx.png"
            alt="Talking to agent icon"
          />
          <h1>CONFIRM YOUR CHOICE</h1>
          <p>
            Ask Questions, discuss your Options, and have your choices
            Confirmed.
          </p>
        </div>
        <div>
          <img src="https://i.imgur.com/xfOf6Iq.png" alt="Family Icon" />
          <h1>ENJOY YOUR BENEFITS</h1>
          <p>
            Focus on what really matters while we ensure that you are covered.
          </p>
        </div>
      </div>
    </div>
  );
}
