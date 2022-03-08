import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p>© 2022 Airbnb clone by William Huang</p>
      <p className="links">
      <Link  to="/">Privacy</Link>{" · "}
      <Link  to="/">Term</Link>{" · "}
      <Link  to="/">Sitemap</Link>{" · "}
      <Link  to="/">Company Details</Link>
      </p>
    </div>
  );
}

export default Footer;
