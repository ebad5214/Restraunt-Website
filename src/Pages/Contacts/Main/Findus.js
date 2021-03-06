import React from "react";
import { useHistory } from "react-router-dom";

import SubHeading from "../../../Components/Store/SubHeading/SubHeading";
import { images } from "../../../Constants";

const Findus = () => {

  const visit = useHistory()

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Shop Number 7 Sham-E-Avadh Bazaar, Parivartan Chowk, Hazratganj,
            Lucknow, Uttar Pradesh 226001
          </p>
          <p
            className="p__opensans"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 aM - 2:00 aM</p>
          <p className="p__opensans">Sat - Sun: 09:30 aM - 3:00 aM</p>
        </div>
        <button className="custom__button" style={{ marginTop: "2rem" }} onClick = {() => {
          visit.push('/booking')
        }}>
          Visit Us
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  );
};

export default Findus;
