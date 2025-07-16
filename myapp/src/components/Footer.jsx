import React from 'react';
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>© All rights reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com" target="_blank" >YouTube</a>
          <a href="https://instagram.com" target="_blank" >Instagram</a>
          <a href="https://github.com" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
