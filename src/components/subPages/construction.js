import React from "react";
import SpecificService from "../helpers/SpecificService";
import Footer from "../Footer.js";
import "../styles/specificService.css";

export default function construction() {
  return (
    <div className="aerospace-wrapper">
      <div className="specific-service-header">Construction</div>
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Impact Resistant Glazing"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Design Options"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Window and Door
        Manufacturing"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Industrial Maintenance
        Coatings"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Waterproofing Chemicals"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Weatherproofing"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Paint Additives"
      />
      <Footer />
    </div>
  );
}
