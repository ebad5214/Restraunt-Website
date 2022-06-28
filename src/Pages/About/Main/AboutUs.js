import React from "react";

import { images } from "../../../Constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.TE} alt="E_Letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About us</h1>
          <img src={images.spoon} alt="About_Spoon" className="spoon__img" />
          <p className="p__opensans">
            Food brings people together on many different levels. It’s
            nourishment of the soul and body; it’s truly love
          </p>
          <button type="button" className="custom__button ">
            Know more
          </button>
        </div>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="Knife_Img" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="About_Spoon" className="spoon__img" />
        <p className="p__opensans">
          A well Restaurant is like a winning baseball team.
          <br />
          It makes the most of every crew member's talent and takes advantage of
          every split-second opportunity to speed up service.
        </p>
        <button type="button" className="custom__button" onClick={() => {}}>
          Know more
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
