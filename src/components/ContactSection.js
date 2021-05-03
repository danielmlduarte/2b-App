import React, { useState } from 'react';
import FacebookIcon from '../assets/facebook-square-brands.svg';
import TwitterIcon from '../assets/twitter-square-brands.svg';
import GooglePlusIcon from '../assets/google-plus-square-brands.svg';
import PinterestIcon from '../assets/pinterest-square-brands.svg';
import '../styles/ContactSectionStyle.css';

function ContactSection() {
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
        <input type="image" src={ FacebookIcon } alt="Facebook brand"/>
        <input type="image" src={ TwitterIcon } alt="Twitter brand"/>
        <input type="image" src={ GooglePlusIcon } alt="Google Plus brand"/>
        <input type="image" src={ PinterestIcon } alt="Pinterest brand"/>
      </div>
      
    </section>
  );
};

export default ContactSection;
