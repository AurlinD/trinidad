import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

export default function Header() {
  return (
    <nav>
      <div className="left_menu">
        <Link to="/">Trinidad</Link>
      </div>
      <div className="right_menu">
        <Link to="/about_us">About Us</Link>
        <Link to="/what_we_do">What We Do</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/custom_order">Custom Order</Link>
      </div>
    </nav>
  );
}
