import React, { useEffect, useState } from "react";
import "./review.css";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import ReviewForm from "./ReviewForm";

const Review = () => {
  const [state, setstate] = useState([]);
  console.log(state);
  useEffect(() => {
    const fetchapi = async () => {
      const Url = "https://api.github.com/users/defunkt/followers";
      const response = await fetch(Url);
      const resdata = await response.json();
      setstate(resdata);
    };
    fetchapi();
  }, []);

  return (
    <>
      <div className="container-review">
        <div className="wrapper-review">
          <div className="review-head">
            <p className="review">Review</p>
          </div>
          {state.map((item) => (
            <div className="review-user-details" key={item.id}>
              <div className="image-div">
                <img src={item.avatar_url} alt="" />
              </div>
              <div className="user-details">
                <div className="user-name-and-reply">
                  <span className="user-name">{item.login}</span>
                  <span className="reply">
                    <button className="reply-btn">Reply</button>
                  </span>
                </div>
                <div className="rating-and-contents">
                  <div className="ratings">
                    <StarIcon sx={{ color: "#53ba9d" }} />
                    <StarIcon sx={{ color: "#53ba9d" }} />
                    <StarIcon sx={{ color: "#53ba9d" }} />
                    <StarIcon sx={{ color: "#53ba9d" }} />
                    <StarIcon sx={{ color: "#53ba9d" }} />
                  </div>
                  <div className="date">June 7, 2017</div>

                  <div className="user-comment">
                    <p className="comment">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ratione necessitatibus aspernatur et quos praesentium
                      repudiandae doloribus, aperiam expedita sit adipisci?
                      Blanditiis nulla harum, earum quidem animi a iusto
                      praesentium sapiente quo rem, quia corporis! Expedita
                      possimus dolorum ratione consectetur. Porro!
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
          ))}
        </div>
      </div>
      <ReviewForm />
    </>
  );
};

export default Review;
