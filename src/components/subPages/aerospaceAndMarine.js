import React from "react";
import SpecificService from "../helpers/SpecificService";
import Footer from "../Footer.js";
import "../styles/specificService.css";

export default function aerospaceAndMarine() {
  return (
    <div className="aerospace-wrapper">
      <div className="specific-service-header">Aerospace & Marine</div>
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Electrical Component Protection"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Sealants, Caulking, Electronics Protection"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Tire Filler 'New Technology' "
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Superhydrophobicity and Wing
        Ice Prevention"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Prop Clear: Propeller application"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Self-priming on ship hulls"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Aluminum and Fiberglass Ship Hulls"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="SHP: Arctic and exceptional
        environments"
      />
      <Footer />
    </div>
  );
}
