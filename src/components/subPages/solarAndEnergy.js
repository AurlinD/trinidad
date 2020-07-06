import React from "react";
import SpecificService from "../helpers/SpecificService";
import Footer from "../Footer.js";
import "../styles/specificService.css";

export default function solarAndEnergy() {
  return (
    <div className="aerospace-wrapper">
      <div className="specific-service-header">Solar & Energy</div>
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Cell Encapsulants"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Photo-voltaic Cells"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Frame and Junction Box
        Sealants and Adhesives"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Protective Coatings for Cells
        and Modules"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Transformers"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Wires and Cables"
      />
      <Footer />
    </div>
  );
}
