import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '../assets/android-chrome-192x192.png';

function Navbar() {
    return (
        <nav>
            <Link className="nav-link" to="/">About</Link>
            <Link className="nav-link" to="/projects">Project Gallery</Link>
            <Link className="nav-link" to="/games">Games</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;
