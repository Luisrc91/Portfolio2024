import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './NavBar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <Link to="about" smooth={true} duration={500}>About</Link>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </nav>
    );
}

export default Navbar;
