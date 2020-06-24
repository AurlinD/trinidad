import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop.js";
import "./styles/navigation.css";

export default function Navigation() {
  return (
    <nav className="bar">
      <div className="left_menu">
        <Link className="logo" to="/">
          Trinidad
        </Link>
      </div>
      <div className="right_menu">
        <Link className="main-elements" to="/">
          Home
        </Link>
        <Link className="main-elements" to="/about_us">
          About Us
        </Link>
        <Link className="main-elements" to="/service">
          Service
        </Link>
        <Link className="main-elements" to="/contact">
          Contact
        </Link>
        <Link className="right-most" to="/order">
          Order
        </Link>
        <ScrollToTop />
      </div>
    </nav>
  );
}
