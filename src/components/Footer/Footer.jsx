import React from 'react';
import './Footer.css'; // Assuming you are using CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p>© 2023 Car Rental Company</p>
      </div>
      <div className="footer__contacts">
        <p>Phone: +380730000000</p>
        <p>Email: support@rentacar.ua</p>
      </div>
      <div className="footer__socials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__social-link"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
