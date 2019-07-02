import React from "react";
import "./careers.css";

export default function Careers(props) {
  return (
    <div className="careers_wrapper">
      <div className="split_container">
        <div>
          <h1>Intersted in Joing the CFD Family?</h1>
          <p> then do this thing</p>
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
          <p>
            then do this thing so many things that we can contain all the things
            then do this thing so many things that we can contain all the things
            <br />
            <br />
            then do this thing so many things that we can contain all the things
            then do this thing so many things that we can contain all the things
          </p>
        </div>
      </div>
      <div className="split_container">
        <div>
          <h1>Teamwork Culture</h1>
          <p>We work together to reach our goals.</p>
        </div>
        <div>
          <img src="https://i.imgur.com/Cr9Y4Jj.jpg" alt="agent" />
        </div>
      </div>
    </div>
  );
}
