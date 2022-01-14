import React from "react";
import "./footer-main.css";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Copyright from "./Copyright";

const FooterMain = () => {
  return (
    <>
      <div className="container-footer">
        <div className="footer-wrapper">
          <div className="footer-one">
            <div className="product-link">
              <div className="product-head">Products</div>

              <div className="product">
                <div className="ul-product-one">
                  <ul className="cat-one">
                    <li className="footer-list">
                      <a href="">SmartPhone</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Laptop</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Mouse</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Monitor</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Watch</a>
                    </li>
                  </ul>
                </div>

                <div className="ul-product-two">
                  <ul className="cat-two">
                    <li className="footer-list">
                      <a href="">Tablet</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Accessorie</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Mouse Pad</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Handset</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Phablet</a>
                    </li>
                  </ul>
                </div>

                <div className="ul-product-three">
                  <ul className="cat-three">
                    <li className="footer-list">
                      <a href="">Speaker</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Camera</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Play Station</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Xbox</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="brand-links">
              <div className="brand-head">Brands</div>
              <div className="brand">
                <div className="ul-brand-one">
                  <ul className="cat-one">
                    <li className="footer-list">
                      <a href="">Logitech</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Samsung</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Microsoft</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Apple</a>
                    </li>
                  </ul>
                </div>
                <div className="ul-brand-two">
                  <ul className="cat-two">
                    <li className="footer-list">
                      <a href="">Huawei</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Motorola</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Sony</a>
                    </li>
                    <li className="footer-list">
                      <a href="">Nokia</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contacts">
              <div className="contact-head">Contact</div>

              <div className="contact-div">
                <div className="con-one">
                  <span className="con-icon">
                    <MapIcon sx={{ fontSize: "14px" }} />
                  </span>

                  <div className="con-one-addr">
                    <span className="addr">Unit 25 Suite 3, 925 Prospect</span>
                    <span className="addr">PI New York Avenue</span>
                  </div>
                </div>

                <div className="con-two">
                  <span className="con-icon">
                    <EmailIcon sx={{ fontSize: "14px" }} />
                  </span>
                  <span className="addr">htmlstream@support.com</span>
                </div>

                <div className="con-three">
                  <span className="con-icon">
                    <LocalPhoneIcon sx={{ fontSize: "14px" }} />
                  </span>
                  <span className="addr">+32 333 444 555</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-two">
            <div className="subscr">
              <div className="subscribe">Subscribe</div>
              <div className="email-and-btn">
                <input
                  type="email"
                  className="email"
                  placeholder="Enter your email"
                />
                <button className="email-sbmt-btn">></button>
              </div>
            </div>

            <div className="lang-curncy">
              <span className="lang">Language/Currency:</span>
              <div className="select-options">
                <div className="lang-div">
                  <select id="languages" name="languages">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="chinese">Chinese</option>
                    <option value="japanese">Japanese</option>
                  </select>
                </div>
                <div className="currency-div">
                  <select id="currency" name="currency">
                    <option value="euro">Euro</option>
                    <option value="usd">USD</option>
                    <option value="npr">Npr</option>
                    <option value="pound">Pound</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="follow">
              <div className="follow-text">follow us on:</div>
              <div className="social-icons">
                <span className="icon-fb">
                  <FacebookIcon sx={{ fontSize: "14px" }} />
                </span>
                <span className="icon-twit">
                  <TwitterIcon sx={{ fontSize: "14px" }} />
                </span>
                <span className="icon-insta">
                  <InstagramIcon sx={{ fontSize: "14px" }} />
                </span>
                <span className="icon-googl">
                  <GoogleIcon sx={{ fontSize: "14px" }} />
                </span>
                <span className="icon-linkd">
                  <LinkedInIcon sx={{ fontSize: "14px" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default FooterMain;
