import React from "react";
import SpecificService from "../helpers/SpecificService";
import Footer from "../Footer.js";
import "../styles/specificService.css";

export default function personalCareAndBeauty() {
  return (
    <div className="aerospace-wrapper">
      <div className="specific-service-header">Personal Care & Beauty</div>
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Hair Care"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Cosmetics"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={true}
        productHeader="Skin Care and Sun Care"
      />
      <SpecificService
        imgName="specific-service-product.jpg"
        alignRight={false}
        productHeader="Antiperspirants and
        Deodorants"
      />
      <Footer />
    </div>
  );
}
