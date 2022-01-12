import React from "react";
import "./related-recepie.css";

const Relatedrecepie = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="heading">
          <h1 className="related-recepie-head">related recepie</h1>
        </div>
        <div className="recepie-card">
          <div className="recepie-card-one">
            <div className="recepie-desc">
              <p className="recepie-name">Spaghetti</p>
              <p className="recepie-owner">- Nisha Banjyakar</p>
            </div>
          </div>
          <div className="recepie-card-two">
            <div className="recepie-desc">
              <p className="recepie-name">Chicken Biriyani</p>
              <p className="recepie-owner">- Nisha Banjyakar</p>
            </div>
          </div>
          <div className="recepie-card-three">
            <div className="recepie-desc">
              <p className="recepie-name">Pagoda</p>
              <p className="recepie-owner">- Nisha Banjyakar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relatedrecepie;
