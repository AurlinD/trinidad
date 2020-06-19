import React from "react";
import SpecificService from "../helpers/SpecificService";
import Footer from "../Footer.js";
import "../styles/specificService.css";

export default function medicalAndSurgical() {
  return (
    <div className="aerospace-wrapper">
      <div className="specific-service-header">Medical & Surgical</div>
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Electronic Component
        Protection"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Reconstructive Surgery:
        Prosthetics etc."
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="TMedical Equipment: MRI
        Components etc."
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Medical Devices: Defibrillators
        etc."
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Research and Development"
      />
      <Footer />
    </div>
  );
}
