import React from "react";
import "./medicare.css";
import "../Home/Home.css";
import "../../App.css";

import Call from "../CallCTA/Callcta";
import Product from "../Product/Product.js";

// import Button from "../Button/Button";

export default function About(props) {
  return (
    <div>
      <div className="home_wrapper">
        <div className="banner medicareBanner">
          <div>
            <h1>Get the benefits that you deserve</h1>
            <p>
              Find out what you've been investing in <br /> all this time.
            </p>
            <div>
              <a
                data-replaceable-phone-dialable=""
                href="tel:18558700077"
                style={{ textDecoration: "none" }}
              >
                <span className="button">Call Now</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text_container">
          <h1 className="title">
            Medicare Advantage and Dual Special Needs Plans <span>(DSNP)</span>
          </h1>
          <p className="large_body">
            These plans offer an alternative way to get your Original Medicare,
            Part A and Part B, benefits. Unlike Original Medicare, Medicare
            Advantage and DSNP plans may also include prescription drug coverage
            (Part D) and additional benefits, like vision, dental, hearing
            coverage, over-the-counter health products, transportation and a
            fitness benefit.
          </p>
          <h1 className="title">
            Medicare Prescription Drug Coverage <span>(Part D)</span>
          </h1>
          <p className="large_body">
            You can enroll in a stand-alone Medicare Prescription Drug Plan that
            can complement your existing Original Medicare (Part A and Part B)
            coverage. These plans cover a formulary of brand and generic
            medications.
          </p>
          <h1 className="title">
            Medicare Supplement Plans <span>(Medigap)</span>
          </h1>
          <p className="large_body">
            These policies are sold by private insurance companies to help pay
            some of the healthcare costs that Original Medicare (Parts A and B)
            doesn't cover. These plans may offer benefits such as assistance
            with deductibles, premiums, and copayment/ coinsurance, as well as
            emergency foreign travel coverage.
          </p>
          <h1 className="title">Need Medicare Coverage?</h1>
          <p className="large_body">
            CareFree Direct works with consumers to find affordable Medicare
            coverage that meets their healthcare needs. CareFree Direct’s
            licensed agents can match consumers with a variety of Medicare
            coverage options including Medicare Advantage (MA or MAPD), Dual
            Special Needs Plans (DSNP), Medicare Prescription Drug Coverage
            (PDP) and Medicare Supplement Plans (Medigap). CareFree Direct
            offers these plans through a wide range of private insurance
            companies that contract with Medicare.
          </p>
          <br />
          <p className="large_body">
            CareFree Direct can help you learn more and compare any of these
            coverage options to find the right plan for you.
          </p>
          <div className="products_container">
            <Product />
          </div>
        </div>
        <div className="whiteSpace64" />
        <Call />
      </div>
      <div className="banner medicarePromo" />
    </div>
  );
}
