import React, { useState } from 'react';
import '../components/css/navbar.css';

const Navbar = () => {
    const [isNavVisible, setNavVisibility] = useState(false);
  
    const toggleNav = () => {
      setNavVisibility(!isNavVisible);
    };
  
    return (
      <div>
        <nav className="navbar">
          <div className="hamburger" onClick={toggleNav}>
            &#9776; {/* Unicode character for hamburger icon */}
          </div>
          <ul className={`navbar-nav ${isNavVisible ? 'show' : ''}`}>
        <li class="nav-item">
        
      <a class="nav-link" href="#home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#program">Program</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#about-us">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#contact-us">Contact Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#contact-us"> pavan</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#contact-us">chaitanya</a>
    </li>
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
