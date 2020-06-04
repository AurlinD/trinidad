import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../app.css";

export default class OurService extends Component {
  render() {
    return (
      <div class="our-service-body">
        <div class="our-service">
          <h2> OUR SERVICE </h2>
          <div class="button-container">
            <Link type="button" to={`/construction`} class="our-service-button">
              Construction
            </Link>
            <Link
              type="button"
              to={`/medical_surgical`}
              class="our-service-button"
            >
              Medical & Surgical
            </Link>
            <Link
              type="button"
              to={`/manufacturing`}
              class="our-service-button"
            >
              Manufacturing
            </Link>
            <Link
              type="button"
              to={`/aerospace_marine`}
              class="our-service-button"
            >
              Aerospace & Marine
            </Link>
            <Link type="button" to={`/solar_energy`} class="our-service-button">
              Solar & Energy
            </Link>
            <Link
              type="button"
              to={`/personal_care_beauty`}
              class="our-service-button"
            >
              Personal Care & Beauty
            </Link>
            <Link type="button" to={`/electronics`} class="our-service-button">
              Electronics
            </Link>
            <Link
              type="button"
              to={`/custom_formulations`}
              class="our-service-button"
            >
              Custom Formulations
            </Link>
            <Link type="button" to={`/automotive`} class="our-service-button">
              Automotive
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
