import React from 'react';
import TinyoneTablet from '../assets/tinyone-tablet.png';
import AppleBrand from '../assets/apple-brands.svg';
import AndroidBrand from '../assets/android.svg';
import WindowsBrand from '../assets/windows-brands.svg';
import '../styles/TopSectionStyle.css'

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="top-section-content">
        <article>
          <h1>
            Inspire your inspiration
          </h1>
          <h2>
            Simple to use for your app, products showcase and your inspiration
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <img src={ AppleBrand } alt="Apple brand"/>
          <img src={ AndroidBrand } alt="Android brand"/>
          <img src={ WindowsBrand } alt="Windows brand"/>
        </article>
        <img className="tinyone-tablet" src={ TinyoneTablet } alt="Tinyone tablet"/>
      </div>
    </section>
  );
};

export default TopSection;
