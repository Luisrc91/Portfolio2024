import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/ContactMe">Contact</Link>
        </nav>
    );
}

export default Navbar;
