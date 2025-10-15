// Header.js
import React from "react";
import "./Header.css"; // Import the CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>My Logo</h1>
        <img
          src="src/images/profileImage.png"
          alt="My Logo"
          className="logo-img"
        />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
