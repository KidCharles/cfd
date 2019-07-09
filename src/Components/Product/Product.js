import React, { Component } from "react";
import "./Product.css";

// export default function Products(props) {
class Products extends Component {
  state = {
    clicked: "",
    titles: [
      "Medicare Advantage and Dual Special Needs Plans",
      "Medicare Supplements",
      "Medicare Part D",
      "Individual Health",
      "Dental / Vision / Hearing"
    ],
    descriptions: [
      "These plans offer an alternative way to get your Original Medicare, Part A and Part B, benefits. Unlike Original Medicare, Medicare Advantage and DSNP plans may also include prescription drug coverage (Part D) and additional benefits, like vision, dental, hearing coverage, over-the-counter health products, transportation and a fitness benefit.",
      "These policies are sold by private insurance companies to help pay some of the health care costs that Original Medicare (Parts A and B) doesn't cover.  These plans may offer benefits such as assistance with deductibles, premiums, and copayment/ coinsurance, as well as emergency foreign travel coverage.",
      "You can enroll in a stand-alone Medicare Prescription Drug Plan that can complement your existing Original Medicare (Part A and Part B) coverage.  These plans cover a formulary of brand and generic medications.  ",
      "CareFree Direct provides you with the latest quoting and enrollment technology tools designed for mobile/tablet or desktop, in order to find the right plan for each customer. Quick or detailed side by side cost and feature comparison of individual health plans with plans like Medicare Advantage, Medigap, and other products. Through us, you as an agent can sell these popular plans with a wide range of prices from a variety of trusted carriers. With our deep carrier relationships, our leading digital marketing, our social media presence, and our agent tools and expertise, our primary objective remains how to help you write more business faster.",
      "If you are in the market for dental and vision insurance and find yourself asking, 'Why do I need it?' consider the advantages to your overall health. Our oral and ocular health can be key indicators in detecting early stages of many health risks and diseases along with preventing many other health issues. We excel in exceeding clients goals by understanding objectives, and pivoting real-time to drive superior outcomes."
    ]
  };

  changeCard0 = e => {
    if (this.state.clicked !== 0) {
      this.setState({ clicked: 0 });
    } else if (this.state.clicked === 0) {
      this.setState({ clicked: "" });
    }
  };
  changeCard1 = e => {
    if (this.state.clicked !== 1) {
      this.setState({ clicked: 1 });
    } else if (this.state.clicked === 1) {
      this.setState({ clicked: "" });
    }
  };
  changeCard2 = e => {
    if (this.state.clicked !== 2) {
      this.setState({ clicked: 2 });
    } else if (this.state.clicked === 2) {
      this.setState({ clicked: "" });
    }
  };
  changeCard3 = e => {
    if (this.state.clicked !== 3) {
      this.setState({ clicked: 3 });
    } else if (this.state.clicked === 3) {
      this.setState({ clicked: "" });
    }
  };
  changeCard4 = e => {
    if (this.state.clicked !== 4) {
      this.setState({ clicked: 4 });
    } else if (this.state.clicked === 4) {
      this.setState({ clicked: "" });
    }
  };

  render() {
    let card0 = "card";
    let card1 = "card";
    let card2 = "card";
    let card4 = "card";
    let arrow = "";

    let trayClass = "learnMoreClosed";
    if (this.state.clicked !== "") {
      trayClass = "learnMoreOpened";
    }

    if (this.state.clicked === 0) {
      card0 = "card active";
      arrow = "arrow";
    }
    if (this.state.clicked === 1) {
      card1 = "card active";
      arrow = "arrow";
    }
    if (this.state.clicked === 2) {
      card2 = "card active ";
      arrow = "arrow";
    }
    if (this.state.clicked === 4) {
      card4 = "card active";
      arrow = "arrow";
    }
    console.log(this.state);
    return (
      <div>
        <div className="card_container">
          <div className={card0} onClick={this.changeCard0}>
            <img src="https://i.imgur.com/SVIzihJ.jpg" alt="" />
            <div className="container">
              <h1>Medicare Advantage and Dual Special Needs Plans</h1>
              <p>Learn More</p>
            </div>
            <div className={arrow} />
          </div>
          <div className={card1} onClick={this.changeCard1}>
            <img src="https://i.imgur.com/TKd7BfV.jpg" alt="" />
            <div className="container">
              <h1>Medicare Supplements</h1>
              <p>Learn More</p>
            </div>
            <div className={arrow} />
          </div>
          <div className={card2} onClick={this.changeCard2}>
            <img src="https://i.imgur.com/p6miqu2.jpg" alt="" />
            <div className="container">
              <h1>Medicare Prescription Drug Coverage</h1>
              <p>Learn More</p>
            </div>
            <div className={arrow} />
          </div>
          {/* <div className={card3} onClick={this.changeCard3}>
            <img src="https://i.imgur.com/o3zl3Ar.jpg" alt="" />
            <div className="container">
              <h1>Individual Health</h1>
              <p>Learn More</p>
            </div>
          </div> */}
          <div className={card4} onClick={this.changeCard4}>
            <img src="https://i.imgur.com/O674mGb.jpg" alt="" />
            <div className="container">
              <h1>Dental / Vision / Hearing</h1>
              <p>Learn More</p>
            </div>
            <div className={arrow} />
          </div>
        </div>
        <div className={trayClass}>
          <h1 className="learnMoreTitle">
            {this.state.titles[this.state.clicked]}
          </h1>
          <p>{this.state.descriptions[this.state.clicked]}</p>
        </div>
      </div>
    );
  }
}

export default Products;
