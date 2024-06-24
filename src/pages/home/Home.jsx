import React from 'react';
import "./home.css";
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Service from '../../components/offer/Services';
import Menu from '../../components/menu/Menu';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="background-image" id="home">
        <div className="home-content">
          <h1>Every Event <br/>Made Delectable</h1>
          <p>Experience Home-style Cooking and Desserts <br/>for Special Occasions at Affordable Prices</p>
        </div>
      </div>
      <About />
      <Service /> 
      <Menu />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;