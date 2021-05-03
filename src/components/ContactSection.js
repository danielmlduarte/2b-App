import React, { useState } from 'react';
import FacebookIcon from '../assets/facebook-square-brands.svg';
import TwitterIcon from '../assets/twitter-square-brands.svg';
import GooglePlusIcon from '../assets/google-plus-square-brands.svg';
import PinterestIcon from '../assets/pinterest-square-brands.svg';
import '../styles/ContactSectionStyle.css';

const ContactSection = () => {
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();    
  }

  return (
    <section className="contact-section">
      <h1>
        Keep in touch with us
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus
        tristique bidendum. Donec rutrum sed sem quis venenatis.
      </h2>
      <form>
        <input
          className="contact-email-input"
          type="email"
          name="email"
          value={ emailInput }
          onChange={ ({ target: { value } }) => setEmailInput(value) }
          placeholder="Enter your email to update"
        />
        <button
          className="contact-email-submit"
          type="submit"
          onClick={ handleSubmit }
        >
          Submit
        </button>
      </form>
      <div className="contact-social-media">
        <a href="#facebook-page-link">
          <img type="image" src={ FacebookIcon } alt="Facebook brand"/>
        </a>
        <a href="#twitter-page-link">
          <img type="image" src={ TwitterIcon } alt="Twitter brand"/>
        </a>
        <a href="#google-plus-page-link">
          <img type="image" src={ GooglePlusIcon } alt="Google Plus brand"/>
        </a>
        <a href="#piterest-page-link">
          <img type="image" src={ PinterestIcon } alt="Pinterest brand"/>
        </a>
      </div>
      
    </section>
  );
};

export default ContactSection;
