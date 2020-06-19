import React from "react";
import SpecificService from "../helpers/SpecificService";
import Footer from "../Footer.js";
import "../styles/specificService.css";

export default function automotive() {
  return (
    <div className="aerospace-wrapper">
      <div className="specific-service-header">Automotive</div>
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Powertrain and Gasketing"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Engine Cooling and Climate Control"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Body, Chassis and Brakes"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Electronics"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Interior"
      />
      <Footer />
    </div>
  );
}
