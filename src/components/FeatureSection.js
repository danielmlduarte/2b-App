import React from 'react';
import '../styles/FeatureSectionStyle.css';
import TabletIcon from '../assets/tablet-alt-solid.svg';
import LemonIcon from '../assets/lemon-regular.svg';
import FolderIcon from '../assets/folder-regular.svg';
import CodeIcon from '../assets/code-solid.svg';
import EmailIcon from '../assets/envelope-regular.svg';
import BookmarkIcon from '../assets/bookmark-regular.svg';

const FeatureSection = () => {
  return (
    <section id="feature-section" className="feature-section">
      <h1>Tinyone features</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
        tristique bidendum. Donec rutrum sed sem quis venenatis.
      </h2>
      <div className="feature-articles-section">
        <div className="feature-article-content">
          <img src={ TabletIcon } alt=""/>
          <article>
            <h3>
              Fully Responsive
            </h3>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Praesent vitae eros eget tellus
              tristique bidendum.
            </p>
          </article>
        </div>
        <div className="feature-article-content">
          <img src={ LemonIcon } alt=""/>
          <article>
            <h3>
              Fully Layered PSD
            </h3>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Praesent vitae eros eget tellus
              tristique bidendum.
            </p>
          </article>
        </div>
        <div className="feature-article-content">
          <img src={ FolderIcon } alt=""/>
          <article>
            <h3>
              Font Awesome Icons
            </h3>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Praesent vitae eros eget tellus
              tristique bidendum.
            </p>
          </article>
        </div>
        <div className="feature-article-content">
          <img src={ CodeIcon } alt=""/>
          <article>
            <h3>
              HTML3 & CSS3
            </h3>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Praesent vitae eros eget tellus
              tristique bidendum.
            </p>
          </article>
        </div>
        <div className="feature-article-content">
          <img src={ EmailIcon } alt=""/>
          <article>
            <h3>
              Email Template
            </h3>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Praesent vitae eros eget tellus
              tristique bidendum.
            </p>
          </article>
        </div>
        <div className="feature-article-content">
          <img src={ BookmarkIcon } alt=""/>
          <article>
            <h3>
              Free to download
            </h3>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Praesent vitae eros eget tellus
              tristique bidendum.
            </p>
          </article>
        </div>
      </div>      
    </section>
  );
};

export default FeatureSection;
