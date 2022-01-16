import React from "react";
import "./story.css";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SettingsIcon from "@mui/icons-material/Settings";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SpaIcon from "@mui/icons-material/Spa";

const Story = () => {
  return (
    <div className="container-story">
      <div className="wrapper-story">
        <div className="story-btn-div">
          <div className="story-btns">
            <button className="story">Story</button>
            <button className="production">Production</button>
          </div>
        </div>

        <div className="total-contents">
          <div className="story-contents">
            <div className="story-para">
              <h1 className="story-head">THE STORY</h1>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias atque eos commodi consequatur porro laborum molestiae
                perferendis fugit aliquid voluptate animi magnam recusandae
                reprehenderit iste tenetur quod accusamus, mollitia, tempore
                corrupti? Pariatur, autem tempora delectus nemo facere
                asperiores earum possimus.
              </p>
            </div>
            <div className="traditional">
              <h1 className="story-head" id="story-head-trad">
                TRADITIONAL USE
              </h1>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias atque eos commodi consequatur porro laborum molestiae
                perferendis fugit aliquid voluptate animi magnam recusandae
                reprehenderit iste tenetur quod accusamus, mollitia, tempore
                corrupti? Pariatur, autem tempora delectus nemo facere
                asperiores earum possimus.
              </p>
            </div>
          </div>

          <div className="map">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.877931136603!2d85.33308511430313!3d27.72105498278623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190c544a503f%3A0xec136637be66306c!2sYouth%20Innovation%20Lab!5e0!3m2!1sen!2snp!4v1641792532788!5m2!1sen!2snp"
              width="450"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="story-icons-container">
          <div className="story-icons-wrapper">
            <div className="icon-wrapper-first">
              <WarehouseOutlinedIcon fontSize="medium" />
              <div className="story-desc">
                <span className="title">Producer</span>
                <span className="desc">Alternative Herbs Nepal</span>
              </div>
            </div>

            <div className="icon-wrapper-second">
              <MilitaryTechIcon fontSize="medium" />
              <div className="story-desc">
                <span className="title">Certification</span>
                <span className="desc">1000 kg</span>
              </div>
            </div>

            <div className="icon-wrapper-third">
              <SettingsIcon fontSize="medium" />
              <div className="story-desc">
                <span className="title">Relevant Processes</span>
                <span className="desc">Organic | Wild Harvested</span>
              </div>
            </div>

            <div className="icon-wrapper-fourth">
              <RiceBowlIcon fontSize="medium" />
              <div className="story-desc">
                <span className="title">Traditional Use</span>
                <span className="desc">2600m</span>
              </div>
            </div>

            <div className="icon-wrapper-fifth">
              <AllInclusiveIcon fontSize="medium" />
              <div className="story-desc">
                <span className="title">Variety</span>
                <span className="desc">Bird Friendly</span>
              </div>
            </div>
          </div>
          <div className="icon-right">
            <SpaIcon fontSize="medium" sx={{ color: "wheat" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
