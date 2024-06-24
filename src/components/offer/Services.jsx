import React from 'react';
import "./services.css";

const Services = () => {
  return (
    <div className="services-section" id="services">
      <div className="title-container" >
        <h1 className="section-title">What We Offer</h1>
      </div>
      <div className="line-container">
        <div className="line-down"></div>
        <div className="line-branch">
          <div className="line-horizontal"></div>
          <div className="line-vertical"></div>
          <div className="line-vertical"></div>
          <div className="line-vertical"></div>
        </div>
      </div>
      <div className="box-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="service-images/foodpackage.jpg" alt="Service 1" />
              <p>Food Packages</p>
            </div>
            <div className="flip-card-back">
              <img src="service-images/foodpackageinfo.png" alt="Service 1" />
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="service-images/packedmeals.jpg" alt="Service 2" />
              <p>Packed Meals</p>
            </div>
            <div className="flip-card-back">
              <img src="service-images/packedmealsinfo.png" alt="Service 2" />             
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="service-images/cateringphoto.jpg" alt="Service 3" />
              <p>Catering Services</p>
            </div>
            <div className="flip-card-back">
              <img src="service-images/cateringservicesinfo.png" alt="Service 3" />
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
  )
}

export default Services;
