import React from "react";
import "./suggest-product.css";
const SuggestedProduct = () => {
  return (
    <div className="container-suggest">
      <div className="wrapper-suggest">
        <span className="sugst-head">suggested product</span>
        <div className="sugst-pdct-wrapper">
          <div className="sugst-pdct-card">
            <div className="sugst-pdct-one"></div>
            <div className="sugst-pdct-name">
              <span className="pdct-name">holiday blend</span>
            </div>
            <div className="sugst-pdct-contents">
              <span className="pdct-contents">chocolatey, citrusy</span>
            </div>
          </div>

          <div className="sugst-pdct-card">
            <div className="sugst-pdct-two"></div>
            <div className="sugst-pdct-name">
              <span className="pdct-name">holiday blend</span>
            </div>
            <div className="sugst-pdct-contents">
              <span className="pdct-contents">chocolatey, citrusy</span>
            </div>
          </div>

          <div className="sugst-pdct-card">
            <div className="sugst-pdct-three"></div>
            <div className="sugst-pdct-name">
              <span className="pdct-name">holiday blend</span>
            </div>
            <div className="sugst-pdct-contents">
              <span className="pdct-contents">chocolatey, citrusy</span>
            </div>
          </div>

          <div className="sugst-pdct-card">
            <div className="sugst-pdct-four"></div>
            <div className="sugst-pdct-name">
              <span className="pdct-name">holiday blend</span>
            </div>
            <div className="sugst-pdct-contents">
              <span className="pdct-contents">chocolatey, citrusy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedProduct;
