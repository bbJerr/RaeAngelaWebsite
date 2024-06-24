import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./footer.css";
import { FaFacebook, FaInstagram, FaArrowRight } from 'react-icons/fa';
import logoImg from '../../images/logo.jpg';

const Footer = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-content">
        <img className="footer-logo" src={logoImg} alt="site logo" />
          <p className="footer-description">
          Explore the best tastes of Rae Angela's Delectables which offers you a variety of home-style cooking and desserts at affordable prices.
          A food catering dedicated to make your special event and occasion more special, delicious and more delightful.
          </p>
        </div>
        <div className="right-content">
          <div className="footer-column">
            <ul>
              <li><a>
                <Link
                to="about"
                smooth={true}
                duration={500}
                className="footer-link"
                onClick={handleNavbar}>
                  About <FaArrowRight />
                </Link>
              </a></li>

              <li><a>
                <Link
                to="services"
                smooth={true}
                duration={500}
                className="footer-link"
                onClick={handleNavbar}>
                  Services <FaArrowRight />
                </Link>
              </a></li>
              <li><a>
                <Link
                to="menu"
                smooth={true}
                duration={500}
                className="footer-link"
                onClick={handleNavbar}>
                  Menu <FaArrowRight />
                </Link>
              </a></li>
            </ul>
          </div>
          <div className="footer-column">
              <p>Follow Us <FaArrowRight /></p>
            <div className="social-icons">
              <a target="_blank" href="https://www.facebook.com/raeangelasdelectables"><FaFacebook /> Facebook</a>
              <a target="_blank" href="https://www.instagram.com"><FaInstagram /> Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-box">
        <p>© Rae Angela’s Delectables | Cebu, Philippines</p>
      </div>
    </footer>
  )
}

export default Footer;