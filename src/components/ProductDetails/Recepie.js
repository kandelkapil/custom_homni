import React from "react";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import "./Recepie.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Recepie = () => {
  return (
    <div className="container-recepie">
      <div className="wrapper-recepie">
        <div className="container-first">
          <div className="wrapper-first">
            <div className="pair-icon-div">
              <span className="pair-icon">
                <JoinInnerIcon sx={{ fontSize: "40px", color: "gray" }} />
              </span>
            </div>

            <div className="pair-well-with-class">
              <div className="pair-text">Pairs well with</div>
              <div className="pair-items-list">
                <span className="pair-items" id="pair-item-one">
                  Cumin
                </span>
                <span className="pair-items" id="pair-item-two">
                  Timur
                </span>
                <span className="pair-items" id="pair-item-three">
                  Pipla
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-second">
          <div className="wrapper-second">
            <div className="spice-level">Spice Level</div>
            <div className="spice-icon">
              <i className="fas fa-sm fa-pepper-hot"></i>
              <i className="fas fa-sm fa-pepper-hot"></i>
              <i className="fas fa-sm fa-pepper-hot"></i>
              <i className="fas fa-sm fa-pepper-hot"></i>
              <i className="fas fa-sm fa-pepper-hot" id="chilli-not-hot"></i>
            </div>
          </div>
        </div>

        <div className="container-third">
          <div className="wrapper-third">
            <div className="spoon-div">
              <RestaurantIcon sx={{ fontSize: "40px", color: "silver" }} />
            </div>
            <div className="taste-like-class">
              <div className="taste-like">Tastes Like</div>
              <div className="taste-list">
                <span className="tastes" id="taste-one">
                  Smoke
                </span>

                <span className="tastes" id="taste-two">
                  Cherries
                </span>

                <span className="tastes" id="taste-three">
                  Guava
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-four">
          <div className="wrapper-four">
            <button className="view-recepie">VIEW RECEPIE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepie;
