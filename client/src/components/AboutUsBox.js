import React, { Component } from "react";

import "../app.css"

export default class AboutUsBox extends Component {
  render() {
    return(
    <div class={`about-us-box ${this.props.alignRight ? "reverse" : ""}`}>
      <div class="about-us-text">
        <div class="about-us-headder-back">
          <h2> {this.props.aboutUsHeadder} </h2>
          <div class="about-us-grey-back">
          </div>
        </div>
        <p> {this.props.aboutUsBody} </p>
      </div>
      <div class="about-us-img-box">
        <img class="about-us-img" src="/lib/test.png" />
      </div>
    </div>
    );
  }
}
