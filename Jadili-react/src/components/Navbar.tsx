import React from 'react';
import Profile from './Profile';// Profile 

const Navbar = () => {
  return (
    <header className="header" data-header>
      <div className="container">

        <a href="#" className="logo">
          <img src="./src/assets/images/logo.svg" width="119" height="37" alt="Wren logo" />
        </a>

        <nav className="navbar" data-navbar>

          <div className="navbar-top">
            <a href="#" className="logo">
              <img src="./src/assets/images/logo.svg" width="119" height="37" alt="Wren logo" />
            </a>

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">

            <li>
              <a href="#home" className="navbar-link hover-1" data-nav-toggler>Home</a>
            </li>

            <li>
              <a href="#topics" className="navbar-link hover-1" data-nav-toggler>Topics</a>
            </li>

            <li>
              <a href="#featured" className="navbar-link hover-1" data-nav-toggler>Featured Post</a>
            </li>

            <li>
              <a href="#recent" className="navbar-link hover-1" data-nav-toggler>Recent Post</a>
            </li>

            <li>
              <a href="#footer" className="navbar-link hover-1" data-nav-toggler></a>
            </li>

          </ul>

          {/* Profile dropdown section */}
          <Profile />

          <p className="copyright-text">
            Copyright 2022 © Wren - Personal Blog Template.
            Developed by codewithsadee
          </p>

        </nav>

        <a href="#" className="btn btn-primary">Subscribe</a>

        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
