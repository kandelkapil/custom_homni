import React from "react";
import { Link } from "react-router-dom";

const FooterMain = () => {
  return (
    <div className="container-footer">
      <div className="footer-wrapper">
        <div className="footer-one">
          <div className="product-link">
            <nav>
              <ul className="cat-one">
                <li>
                  <a href="">SmartPhone</a>
                </li>
                <li>
                  <a href="">Laptop</a>
                </li>
                <li>
                  <a href="">Mouse</a>
                </li>
                <li>
                  <a href="">Watch</a>
                </li>
              </ul>

              <ul className="cat-two">
                <li>
                  <a href="">Tablet</a>
                </li>
                <li>
                  <a href="">Accessorie</a>
                </li>
                <li>
                  <a href="">Mouse Pad</a>
                </li>
                <li>
                  <a href="">Handset</a>
                </li>
                <li>
                  <a href="">Phablet</a>
                </li>
              </ul>

              <ul className="cat-three">
                <li>
                  <a href="">Speaker</a>
                </li>
                <li>
                  <a href="">Camera</a>
                </li>
                <li>
                  <a href="">Play Station</a>
                </li>
                <li>
                  <a href="">Xbox</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="brand-links">
            <nav>
              <ul className="cat-one">
                <li>
                  <a href="">Logitech</a>
                </li>
                <li>
                  <a href="">Samsung</a>
                </li>
                <li>
                  <a href="">Microsoft</a>
                </li>
                <li>
                  <a href="">Apple</a>
                </li>
              </ul>

              <ul className="cat-two">
                <li>
                  <a href="">Huawei</a>
                </li>
                <li>
                  <a href="">Motorola</a>
                </li>
                <li>
                  <a href="">Sony</a>
                </li>
                <li>
                  <a href="">Nokia</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="contacts">
            <div className="contact">Contact</div>

            <div className="con-one">
              <span className="con-icon">Icon</span>

              <div className="con-one-addr">
                <span className="addr">Unit 25 Suite 3, 925 Prospect</span>
                <span className="addr">PI New York Avenue</span>
              </div>
            </div>

            <div className="con-two">
              <span className="con-icon">Icon2</span>
              <span className="addr">htmlstream@support.com</span>
            </div>

            <div className="con-three">
              <span className="con-icon">Icon2</span>
              <span className="addr">+32 333 444 555</span>
            </div>
          </div>
        </div>
        <div className="footer-two">
          <div className="subscr">
            <span className="subscribe">Subscribe</span>
            <div className="email-and-btn">
              <input type="email" placeholder="Enter your email" />
              <button>click</button>
            </div>
          </div>

          <div className="lang-curncy">
            <span className="lang">Language/Currency</span>
            <span className="english">English</span>
            <span className="euro">Euro</span>
          </div>

          <div className="follow">
            <span className="follow-text">follow us on</span>
            <div className="social-icons">
              <span className="face">facebook</span>
              <span className="twit">twitter</span>
              <span className="insta">instagram</span>
              <span className="gmail-plus">gmailplus</span>
              <span className="linked-in">linkedin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
