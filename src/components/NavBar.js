import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.scss'; // Import the Sass file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <span className={`name ${isOpen ? 'visible' : ''}`}>Luis Ramirez</span>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/MainProjects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/ContactMe" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
