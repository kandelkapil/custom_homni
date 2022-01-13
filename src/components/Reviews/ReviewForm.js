import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
const ReviewForm = () => {
  return (
    <div className="review-form-container">
      <div className="review-form-wrapper">
        <div className="add-review-head">
          <p className="head-add-review">Add Review</p>
        </div>
        <form action="">
          <div className="user-data">
            <div className="first-name">
              <input type="text" id="fname" placeholder="First name" />
            </div>
            <div className="email">
              <input type="email" id="email" placeholder="Email" />
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
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarOutlineIcon />
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
