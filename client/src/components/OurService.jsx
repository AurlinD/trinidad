import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../app.css";

export default class OurService extends Component {
  render() {
    return (
      <div className="our-service-body">
        <div className="our-service">
          <h2> OUR SERVICE </h2>
          <div className="button-container">
            <Link
              type="button"
              to={`/construction`}
              className="our-service-button"
            >
              Construction
            </Link>
            <Link
              type="button"
              to={`/medical_surgical`}
              className="our-service-button"
            >
              Medical & Surgical
            </Link>
            <Link
              type="button"
              to={`/manufacturing`}
              className="our-service-button"
            >
              Manufacturing
            </Link>
            <Link
              type="button"
              to={`/aerospace_marine`}
              className="our-service-button"
            >
              Aerospace & Marine
            </Link>
            <Link
              type="button"
              to={`/solar_energy`}
              className="our-service-button"
            >
              Solar & Energy
            </Link>
            <Link
              type="button"
              to={`/personal_care_beauty`}
              className="our-service-button"
            >
              Personal Care & Beauty
            </Link>
            <Link
              type="button"
              to={`/electronics`}
              className="our-service-button"
            >
              Electronics
            </Link>
            <Link type="button" to={`/order`} className="our-service-button">
              Custom Formulations
            </Link>
            <Link
              type="button"
              to={`/automotive`}
              className="our-service-button"
            >
              Automotive
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
