import React, { Component } from "react";

import "../app.css"

export default class AboutUsBox extends Component {
  render() {
    return(
    <div class={`about-us-box ${this.props.alignRight ? "reverse" : ""}`}>
      <div class="about-us-text">
        <div class="about-us-headder-back">
          <h2> What Are Silicones </h2>
          <div class="about-us-grey-back">
          </div>
        </div>
        <p> Lorem ipsum dolor sit amet, quo utinam feugiat no, pro ea tota propriae officiis, dicit legendos at sit. Mea quando tritani ne, ne vix wisi labores. Singulis patrioque conclusionemque eu vim. Cum esse meis ut. Assueverit interpretaris ut usu, elit bonorum facilisi sed te. </p>
      </div>
      <img class="about-us-img" />
    </div>
    );
  }
}
