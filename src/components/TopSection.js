import React from 'react';
import TinyoneTable from '../assets/tinyone-table.png';

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
        </article>
        <img src={ TinyoneTable } alt=""/>
      </div>
    </section>
  )
};

export default TopSection;
