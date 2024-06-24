import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logoImg from '../../images/logo.jpg';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import './header.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <a href="#home" className="navbar-brand flex">
            <img className="logo-img" src={logoImg} alt="site logo" />
          </a>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{ color: `${toggleMenu ? '#F4999E' : 'white'}` }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? 'navbar-collapse show-navbar-collapse'
              : 'navbar-collapse'
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleNavbar}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="menu"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleNavbar}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
