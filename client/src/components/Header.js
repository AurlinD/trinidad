import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

export default function Header() {
  return (
    <nav className="bar">
      <div className="left_menu">
        <Link to="/">Trinidad</Link>
      </div>
      <div className="right_menu">
        <Link to="/">Home</Link>
        <Link to="/about_us">About Us</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/order">Order</Link>
      </div>
    </nav>
  );
}
