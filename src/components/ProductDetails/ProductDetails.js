import React from "react";
import Image from "../../assets/img1.png";
import "./product.css";
import { increment, decrement } from "../../redux/counter";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="products">
      <img className="product-image" src={Image} alt="images" />

      <div className="product-related">
        <div className="product-details">
          <span className="product-det" id="product_name">
            Akbare Chili
          </span>
          <span className="product-det">
            <i class="fas fa-volume-up fa-lg"></i>
          </span>
        </div>
        <div className="reviews">
          <span className="review">
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </span>
          <span className="review">7 reviews</span>
          <span className="review">
            <i class="far fa-comment-alt"></i>
          </span>
          <span className="review">ask a question</span>
        </div>

        <div className="size">
          <span className="size">Size</span>
          <span className="small">Small</span>
          <span className="medium">Medium</span>
          <span className="large">Large</span>
        </div>

        <div className="grind">
          <span className="grind">Grind</span>
          <span className="whole">Whole</span>
          <span className="ground">Ground</span>
        </div>

        <div className="quantity">
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{count}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
