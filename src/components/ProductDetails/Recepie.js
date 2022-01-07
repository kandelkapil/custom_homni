import React from "react";
import "./Recepie.css";

const Recepie = () => {
  return (
    <div className="recepie">
      <div className="recepie-card">
        <div className="first">
          <span className="pair-icon">
            <i class="far fa-handshake"></i>
          </span>
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
      <div className="recepie-card">
        <div className="second">
          <span className="spice-level">Spice Level</span>
          <span className="spice-icon">
            <i class="fas fa-pepper-hot"></i>
            <i class="fas fa-pepper-hot"></i>
            <i class="fas fa-pepper-hot"></i>
            <i class="fas fa-pepper-hot"></i>
            <i class="fas fa-pepper-hot"></i>
          </span>
        </div>
      </div>
      <div className="recepie-card">
        <div className="third">
          <span className="spoon">
            <i class="fas fa-utensil-spoon"></i>
          </span>

          <span className="taste-like">Taste Like</span>
          <div className="taste-list">
            <span className="taste">Smoke</span>
            <span className="taste">|</span>
            <span className="taste">Cherries</span>
            <span className="taste">|</span>
            <span className="taste">Guava </span>
          </div>
        </div>
      </div>

      <div className="recepie-card">
        <div className="fourth">
          <div className="card-taste">
            <button className="view-recepie">VIEW RECEPIE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepie;
