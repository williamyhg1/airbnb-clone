import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>© 2022 Airbnb clone by William Huang</p>
      <p className="links">
        <a href="/">Privacy</a> ·   
        <a href="/"> Term</a> · 
        <a href="/"> Sitemap</a> ·
        <a href="/"> Company Details</a>
      </p>
    </div>
  );
}

export default Footer;
