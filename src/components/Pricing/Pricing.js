import React from "react";
import "./Pricing.css";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CircleIcon from "@mui/icons-material/Circle";
import HardwareIcon from "@mui/icons-material/Hardware";
import DescriptionIcon from "@mui/icons-material/Description";
import FlightIcon from "@mui/icons-material/Flight";
const Pricing = () => {
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-wrapper">
          <div className="pricing-texts">
            <span className="price-head">Transparent Pricing</span>
            <p className="price-desc-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
              excepturi nobis? Ipsam voluptas illum quidem rem, iusto a
              perferendis molestiae iure nam quibusdam natus pariatur temporibus
              neque iste placeat itaque qui dolore? Voluptatem labore, delectus
              eum officiis aliquid autem pariatur atque neque nostrum
              perferendis, ullam alias doloremque a vitae reiciendis!
            </p>
          </div>

          <div className="icons-and-contents">
            <div className="icon-set-one">
              <div className="icon-one">
                <Inventory2Icon fontSize="large" sx={{ color: "white" }} />
                <div className="icon-text">
                  <span className="text">Material</span>
                  <span className="price">$17</span>
                </div>
              </div>

              <div className="icon-two">
                <CircleIcon fontSize="large" sx={{ color: "white" }} />
                <div className="icon-text">
                  <span className="text">Hardware</span>
                  <span className="price">$50</span>
                </div>
              </div>
              <div className="icon-three">
                <HardwareIcon fontSize="large" sx={{ color: "white" }} />

                <div className="icon-text">
                  <span className="text">Labour</span>
                  <span className="price">$50</span>
                </div>
              </div>
            </div>

            <div className="icon-set-two">
              <div className="icon-four">
                <DescriptionIcon fontSize="large" sx={{ color: "white" }} />
                <div className="icon-text">
                  <span className="text">Duties</span>
                  <span className="price">$29</span>
                </div>
              </div>
              <div className="icon-fifth">
                <FlightIcon fontSize="large" sx={{ color: "white" }} />
                <div className="icon-text">
                  <span className="text">Transport</span>
                  <span className="price">$29</span>
                </div>
              </div>
            </div>
            <div className="pay-text">
              <span className="we-pay">We pay X% above fair trade</span>
            </div>
            <div className="pay-text-more">
              <span className="we-pay">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
