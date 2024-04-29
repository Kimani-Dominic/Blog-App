import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="./src/assets/images/logo.svg" width="119" height="37" loading="lazy" alt="Wren logo" />
              </a>
              <p className="footer-text">
                When an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="footer-list-title">Address</p>
              <address className="footer-text address">
                123 Main Street <br />
                New York, NY 10001
              </address>
            </div>
            <div className="footer-list">
              <p className="footer-list-title">Categories</p>
              <ul>
                {['Action', 'Business', 'Adventure', 'Canada', 'America', 'Curiosity', 'Animal', 'Dental', 'Biology', 'Design', 'Breakfast', 'Dessert'].map(category => (
                  <li key={category}>
                    <a href="#" className="footer-link hover-2">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>
              <p className="footer-text">
                Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.
              </p>
              <div className="input-wrapper">
                <input type="text" name="name" placeholder="Your name" required className="input-field" autoComplete="off" />
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
              </div>
              <div className="input-wrapper">
                <input type="email" name="email_address" placeholder="Email address" required className="input-field" autoComplete="off" />
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>
              <a href="#" className="btn btn-primary">
                <span className="span">Subscribe</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              &copy; Developed by <a href="https://kimani-dominic.github.io/Dev.Kimani/" className="copyright-link">Kimani.</a>
            </p>
            <ul className="social-list">
              <li>
              <a href="#" className="social-link">
                <FaTwitter />
                <span className="span">Twitter</span>
              </a>
              </li>
              <li>
              <a href="#" className="social-link">
                <FaLinkedin />
                <span className="span">Linkedin</span>
              </a>
              </li>
              <li>
              <a href="#" className="social-link">
                <FaInstagram />
                <span className="span">Instagram</span>
              </a>
              </li>

              {/* Add other social media icons here */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
