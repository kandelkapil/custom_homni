import React from "react";
import Recepie from "./Recepie";
import Image from "../../assets/img1.png";
import "./product.css";
import { increment, decrement } from "../../redux/counter";
import { useDispatch, useSelector } from "react-redux";
import Story from "./Story";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <>
      <div className="products">
        <img className="product-image" src={Image} alt="images" />

        <div className="product-related">
          <div className="product-details">
            <span className="product-det" id="product_name">
              Akbare Chili
            </span>
            <span className="product-det">
              <i className="fas fa-volume-up fa-lg"></i>
            </span>
          </div>

          <div className="reviews">
            <span className="review ">
              <i className="fas fa-star "></i>
              <i className="fas fa-star "></i>
              <i className="fas fa-star "></i>
              <i className="fas fa-star "></i>
              <i className="fas fa-star "></i>
            </span>
            <span className="review">7 reviews</span>
            <div className="review">
              <i className="fas fa-comment-alt" id="quest"></i>

              <span id="quest">ask a question</span>
            </div>
          </div>

          <div className="prices">
            <span className="stock-price" id="dollar">
              $125.00
            </span>
            <span className="price-stock" id="in-stock">
              Stock level low
            </span>
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
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
      <Recepie />
      <Story />
    </>
  );
};

export default ProductDetails;
