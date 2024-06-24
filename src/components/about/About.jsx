import React, { useState, useEffect } from 'react';
import './about.css';


const images = [
  '/about-images/aboutimage1.jpg',
  '/about-images/aboutimage2.jpg',
  '/about-images/aboutimage3.jpg',
  '/about-images/aboutimage4.jpg',
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use effect to cycle images automatically every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // 3000 ms = 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt="About"
          className="about-image"
        />
        
      </div>
      <div className="about-info-container">
        <h1>The Heart Of Our Kitchen</h1>
        <p>
        Inheriting a love for Filipino cuisine that spans generations, Rachel R. Javier pours her passion into every dish at Rae Angela's Delectables. 
        Our family-run business has been delighting taste buds for over 24 years with authentic recipes and fresh ingredients. But it's Mommy Rachel's unique touch that 
        truly sets us apart. Her flavorful creations keep our customers coming back for more, ensuring every event is a delicious celebration.
        </p>
      </div>
    </div>
  );
};

export default About;