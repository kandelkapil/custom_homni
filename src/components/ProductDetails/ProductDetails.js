import React from "react";
import Recepie from "./Recepie";
import Image from "../../assets/img1.png";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./product-details.css";
import { increment, decrement } from "../../redux/counter";
import { useDispatch, useSelector } from "react-redux";
import Story from "./Story";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <>
      <div className="container-product">
        <div className="wrapper-product">
          <div className="product-image-div">
            <img className="product-image" src={Image} alt="images" />
          </div>
          <div className="product-related">
            <div className="product-details">
              <span className="product-det" id="product_name">
                Akbare Chili
              </span>
              <span className="product-det">
                <VolumeUpIcon sx={{ fontSize: "30px" }} />
              </span>
            </div>

            <div className="reviews">
              <span className="review ">
                <StarIcon sx={{ fontSize: "23px", color: " #de8730;" }} />
                <StarIcon sx={{ fontSize: "23px", color: " #de8730;" }} />
                <StarIcon sx={{ fontSize: "23px", color: " #de8730;" }} />
                <StarIcon sx={{ fontSize: "23px", color: " #de8730;" }} />
                <StarIcon sx={{ fontSize: "23px", color: " #de8730;" }} />
              </span>
              <span className="review-txt">7 reviews</span>
              <div className="review">
                <ContactSupportIcon
                  sx={{ fontSize: "23px", color: "#6e6862" }}
                />

                <div className="quest">ask a question</div>
              </div>
            </div>

            <div className="prices">
              <div className="stock-price">$125.00</div>
              <div className="price-stock">Stock level low</div>
            </div>

            <div className="sizes">
              <span className="size">Size</span>
              <span className="small">Small</span>
              <span className="medium">Medium</span>
              <span className="large">Large</span>
            </div>

            <div className="grinds">
              <span className="grind">Grind</span>
              <span className="whole">Whole</span>
              <span className="ground">Ground</span>
            </div>

            <div className="quantity">
              <span className="quant">Quantity</span>

              <div className="quantity-wrapper">
                <button
                  className="quant-btn"
                  onClick={() => dispatch(decrement())}
                >
                  -
                </button>
                <span className="product-count">{count}</span>
                <button
                  className="quant-btn"
                  onClick={() => dispatch(increment())}
                >
                  +
                </button>
              </div>
            </div>

            <div className="add-to-cart">
              <button className="cart">
                ADD TO CART
                <ShoppingCartIcon sx={{ fontSize: "25px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Recepie />
      <Story />
    </>
  );
};

export default ProductDetails;
