import React, { Component } from "react";

import "../app.css";

export default class AboutUsBox extends Component {
  render() {
    return (
      <div className={`about-us-box ${this.props.alignRight ? "reverse" : ""}`}>
        <div className="about-us-text">
          <div className="about-us-header-back">
            <h2> {this.props.aboutUsHeader} </h2>
            <div className="about-us-grey-back"></div>
          </div>
          <p> {this.props.aboutUsBody} </p>
        </div>
        <div className="about-us-img-box">
          <img
            className="about-us-img"
            src={`/lib/${this.props.imgName}`}
            alt=""
          />
        </div>
      </div>
    );
  }
}
