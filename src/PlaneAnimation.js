import React from 'react';
import './PlaneAnimation.css';
import planeImage from './img/Pl.jpg';
 // Ensure this CSS file contains relevant styles

const PlaneAnimation = ({ isVisible }) => {
  return (
    <div className={`plane-animation ${isVisible ? 'visible' : ''}`}>
      <img src={planeImage} alt="Plane" className="plane" />
    </div>
  );
};

export default PlaneAnimation;
