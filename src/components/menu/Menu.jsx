import React, { useState } from 'react';
import "./menu.css";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="menu-section" id="menu">
      <div className={`menu-title ${isVisible ? 'show' : ''}`}>
        <h1>Check Out Our Menu</h1>
      </div>
      <div className="arrow-container" onClick={toggleMenu}>
        <img
          src="menu-images/spiral-arrow.png"
          alt="arrow"
          className={`arrow ${isVisible ? 'show' : ''}`}
        />
        <p className="click-me">Click Me!</p>
      </div>
      <div className="image-container">
        <img
          src="menu-images/menu1.jpg"
          alt="Menu 1"
          className="menu-image"
        />
        <img
          src="menu-images/menu2.jpg"
          alt="Menu 2"
          className="menu-image"
        />
      </div>
    </div>
  );
};

export default Menu;
