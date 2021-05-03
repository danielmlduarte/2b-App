import React from 'react';
import '../styles/CustomFooterStyle.css';

const CustomFooter = () => {
  return (
    <footer className="footer-container">
      <div>
        <p>
          HALOVIETNAM LTD
        </p>
        <p>
          66, Dang Van ngu, Dong Da
          Hanoi, Vietnam
          contact@halovietnam.com
          +844 35149182
        </p>
      </div>
      <div className="footer-links">
        <div>
          <a href="#Examples">Examples</a>
          <a href="#Shop">Shop</a>
          <a href="#License">License</a>
        </div>
        <div>
          <a href="#Contact">Contact</a>
          <a href="#About">About</a>
          <a href="#Privacy">Privacy</a>
          <a href="#Terms">Terms</a>
        </div>
        <div>
          <a href="#Download">Download</a>
          <a href="#Support">Support</a>
          <a href="#Documents">Documents</a>
        </div>
        <div>
          <a href="#Media">Media</a>
          <a href="#Blog">Blog</a>
          <a href="#Forums">Forums</a>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
