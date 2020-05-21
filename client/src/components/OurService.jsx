import React, { Component } from "react";

import "../app.css"

export default class OurService extends Component {
  render() {
    return(
      <div class="our-service-body">
        <div class="our-service">
          <h2> Our Services </h2>
          <div class="button-container">
            <button type="button" class="our-service-button">Construction</button>
            <button type="button" class="our-service-button">Medical & Surgical</button>
            <button type="button" class="our-service-button">Manufacturing</button>
            <button type="button" class="our-service-button">Aerospace & Marine</button>
            <button type="button" class="our-service-button">Solar & Energy</button>
            <button type="button" class="our-service-button">Personal Care & Beauty</button>
            <button type="button" class="our-service-button">Electronics</button>
            <button type="button" class="our-service-button">Custom Formulations</button>
            <button type="button" class="our-service-button">Automotive</button>
          </div>
        </div>
      </div>
    )
  }
}
