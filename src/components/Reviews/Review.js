import React from "react";
import "./review.css";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";

const Review = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="review-head">
          <p className="review">Review</p>
        </div>
        <div className="user-reviews">
          <div className="image"></div>
          <div className="user-details">
            <div className="user-name-and-reply">
              <p className="user-name">James Coolman</p>
              <button className="reply">Reply</button>
            </div>
            <div className="ratings">
              <StarIcon sx={{ color: "#53ba9d" }} />
              <StarIcon sx={{ color: "#53ba9d" }} />
              <StarIcon sx={{ color: "#53ba9d" }} />
              <StarIcon sx={{ color: "#53ba9d" }} />
              <StarIcon sx={{ color: "#53ba9d" }} />
            </div>
            <div className="date">June 7,2017</div>

            <div className="user-comment">
              <p className="comment">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione necessitatibus aspernatur et quos praesentium
                repudiandae doloribus, aperiam expedita sit adipisci? Blanditiis
                nulla harum, earum quidem animi a iusto praesentium sapiente quo
                rem, quia corporis! Expedita possimus dolorum ratione
                consectetur. Porro!
              </p>
            </div>
            <div className="reaction-icons">
              <div className="love-div">
                <span className="love">
                  <FavoriteBorderIcon />
                </span>
                <p className="love-detail">5</p>
              </div>
              <div className="reply-div">
                <span className="reply">
                  <ReplyIcon />
                </span>
                <p className="reply-detail">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
