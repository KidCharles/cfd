import React, { Component } from "react";
import "./Product.css";

// export default function Products(props) {
class Products extends Component {
  state = {
    clicked: "",
    titles: [
      "Medicare Advantage",
      "Medicare Supplements",
      "Medicare Part D",
      "Individual Health",
      "Dental / Vision / Hearing"
    ],
    descriptions: [
      "CareFree Direct represents the leading Medicare Advantage carriers in terms of enrollment, and we provide you the latest Medicare quoting and enrollment technology tools designed for mobile/tablet or desktop. Quick or detailed side by side cost and feature comparison of Medicare Advantage, Part D, Medicare Supplement, and other products as well. With more than 15 years in the Medicare market, focused reinvestment in next generation agent productivity capabilities supporting all 50 States, we listen carefully to our brokers and agency’s needs. Our deep carrier relationships, and leading digital marketing, social media and presence agent tools and expertise, our primary objective remains how to help you write more business faster.",
      "Medicare Supplement Insurance policies are a common choice by Medicare customers to help pay some of the remaining health care costs not covered by a basic Medicare Plan. CareFree Direct represents the leading Medicare Supplement carriers in terms of enrollment. With more than 15 years in the Medicare market, focused reinvestment in next generation agent productivity capabilities supporting all 50 States, we listen carefully to our brokers and agency’s needs. We provide you with the latest Medicare quoting and enrollment technology tools designed for mobile/tablet or desktop. Quick or detailed side by side cost and feature comparison of Medicare Supplement with Medicare Advantage, Part D, and other products as well. Through us, you as an agent can sell these popular plans with a wide range of prices from a variety of trusted carriers. With our deep carrier relationships, our leading digital marketing, our social media presence, and our agent tools and expertise, our primary objective remains how to help you write more business faster.",
      "Medicare Plan D is vital for a large portion of the Medicare community. Prescriptions are growing more expensive, and those who have chronic and long term conditions rely on Part D in order to afford medications. This plan’s popularity is only going to grow as baby boomers reach and pass 65+. CareFree Direct provides you with the latest Medicare Plan D quoting and enrollment technology tools designed for mobile/tablet or desktop. Quick or detailed side by side cost and feature comparison of Plan D with private plans like Medicare Advantage, Medigap, and other products. Through us, you as an agent can sell these popular plans with a wide range of prices from a variety of trusted carriers. With our deep carrier relationships, our leading digital marketing, our social media presence, and our agent tools and expertise, our primary objective remains how to help you write more business faster.",
      "CareFree Direct provides you with the latest quoting and enrollment technology tools designed for mobile/tablet or desktop, in order to find the right plan for each customer. Quick or detailed side by side cost and feature comparison of individual health plans with plans like Medicare Advantage, Medigap, and other products. Through us, you as an agent can sell these popular plans with a wide range of prices from a variety of trusted carriers. With our deep carrier relationships, our leading digital marketing, our social media presence, and our agent tools and expertise, our primary objective remains how to help you write more business faster.",
      "Dental, Vision, and Hearing in insurance plans are very important, not only for emergency treatment, but for preventative medicine, which lowers the risk of problems that older adults deal with, such as failing eyes or losing teeth. Many plans do not carry these; but with us, CareFree Direct provides you with the latest quoting and enrollment technology tools designed for mobile/tablet or desktop, in order to find the right plan for each customer.Quick or detailed side by side cost and feature comparison with many different specialized plans, with a variety of prices and terms. Through us, you as an agent can sell these plans with a wide range of prices from a variety of trusted carriers. With our deep carrier relationships, our leading digital marketing, our social media presence, and our agent tools and expertise, our primary objective remains how to help you write more business faster. "
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
              <h1>Medicare Advantage</h1>
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
              <h1>Medicare Part D</h1>
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
