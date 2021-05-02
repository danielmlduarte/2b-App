import React from 'react';
import '../styles/CustomHeaderStyle.css';
import TinyoneLogo from '../assets/tinyone-logo.png';

const CustomHeader = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-nav-hero">
          <input type="image" src={ TinyoneLogo } alt="" />
          <span>tiyone</span>
        </div>
        <div className="header-nav-buttons">
          <a href="#feature-section">Features</a>
          <a href=" ">Support</a>
          <a href=" ">Blog</a>
        </div>
      </nav>
    </header>
  )
}

export default CustomHeader;

