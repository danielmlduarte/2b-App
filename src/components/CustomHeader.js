import React from 'react';
import '../styles/CustomHeaderStyle.css';
import TinyoneLogo from '../assets/tinyone-logo.png';

const CustomHeader = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <a href="#home" className="header-nav-hero">
          <img src={ TinyoneLogo } alt="" />
          <span>tiyone</span>
        </a>
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

