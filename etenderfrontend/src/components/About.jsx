import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import etenderp from "../Assets/e-tenderp.jpg";
import aboutbgone from "../Assets/aboutbgone.png";
import {Link} from "react-router-dom";

import AboutBackgroundImage from "../Assets/about-background-image.png";
//import { BsFillPlayCircleFill } from "react-icons/bs";

function About() {
    return (
    <div className="test-about-section-container">

      <div className="test-about-section-image-container">
        <img src={etenderp}  alt="" />
      </div>
      <div className="test-about-section-text-container">
        <h1 className="test-primary-heading">
          E-Tender
        </h1>
        <p className="test-primary-text">
          Electronic tender opening, bidding and granting.
        </p>
        <p className="test-primary-text">
          This application provides a comprehensive solution that includes open tender and grant processing, 
          bid evaluation, automated award calculations, and contract management. You can find
          the source code <a href='https://github.com/AshuIMade/etenderFrontend.git'> source code </a>
        </p>
        <div className="test-about-buttons-container">
          <button className="test-secondary-button">Learn More</button>
        </div>
      </div>
    </div> 
    )
}
      //<div className="test-about-background-image-container">
        //<img src={etenderp} alt="" />
      //</div>
export default About
