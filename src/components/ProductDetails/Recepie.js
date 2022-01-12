import React from "react";
import "./Recepie.css";

const Recepie = () => {
  return (
    <div className="recepie">
      <div className="first">
        <div className="pair-div">
          <span className="pair-icon">
            <i className="far fa-handshake fa-2x"></i>
          </span>
          <div className="pair-well-with-class">
            <span className="pair-text">Pairs well with</span>
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

      <div className="second">
        <span className="spice-level">Spice Level</span>
        <span className="spice-icon">
          <i className="fas fa-pepper-hot"></i>
          <i className="fas fa-pepper-hot"></i>
          <i className="fas fa-pepper-hot"></i>
          <i className="fas fa-pepper-hot"></i>
          <i className="fas fa-pepper-hot not"></i>
        </span>
      </div>

      <div className="third">
        <div className="spoon-div">
          <span className="spoon">
            <i className="fas fa-utensil-spoon fa-3x"></i>
          </span>
          <div className="taste-like-class">
            <span className="taste-like">Taste Like</span>
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

      <div className="fourth">
        <div className="view-recepie-div">
          <button className="view-recepie">VIEW RECEPIE</button>
        </div>
      </div>
    </div>
  );
};

export default Recepie;
