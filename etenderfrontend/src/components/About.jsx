import React from 'react';
import etenderp from "../Assets/e-tenderp.jpg";


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
          the <a href='https://github.com/AshuIMade/etenderFrontend.git'>source code </a>
        </p>
        <div className="test-about-buttons-container">
          <button className="test-secondary-button">Learn More</button>
        </div>
      </div>
    </div> 
    )
}

export default About
