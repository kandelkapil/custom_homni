import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import "./reviewform.css";

const ReviewForm = () => {
  const reviewFormHandler = (e) => {
    e.preventDefault();
    console.log("review Form Clicked");
  };

  return (
    <div className="review-form-container">
      <div className="review-form-wrapper">
        <div className="add-review-head">
          <p className="head-add-review">Add Review</p>
        </div>
        <form action="" onSubmit={reviewFormHandler}>
          <div className="add-review-body">
            <div className="user-data">
              <div className="first-name">
                <input
                  type="text"
                  id="fname"
                  className="detail"
                  placeholder="First name"
                />
              </div>
              <div className="email">
                <input
                  type="email"
                  id="email"
                  className="detail"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="user-message">
              <input type="text" id="message" placeholder="Your message" />
            </div>

            <div className="add-comnt-rate">
              <div className="add-commnt">
                <button className="commnt-btn">Add Comment</button>
              </div>

              <div className="add-rating">
                <span className="add-user-rate">Rate:</span>
                <span className="add-user-rate-icon">
                  <StarIcon sx={{ color: "#53ba9d", fontSize: "large" }} />
                  <StarIcon sx={{ color: "#53ba9d", fontSize: "large" }} />
                  <StarIcon sx={{ color: "#53ba9d", fontSize: "large" }} />
                  <StarIcon sx={{ color: "#53ba9d", fontSize: "large" }} />
                  <StarIcon sx={{ color: "#DDDDDD", fontSize: "large" }} />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
