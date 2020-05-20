import React from "react";

import AboutUsBox from "../AboutUsBox.js";
import OurService from "../OurService.jsx"

export default function AboutUs() {
  return <div class="page">

  <AboutUsBox
    alignRight={true}
    aboutUsHeader="What are Silicones?"
    aboutUsBody="Lorem ipsum dolor sit amet, quo utinam feugiat no, pro ea tota propriae officiis, dicit legendos at sit. Mea quando tritani ne, ne vix wisi labores. Singulis patrioque conclusionemque eu vim. Cum esse meis ut. Assueverit interpretaris ut usu, elit bonorum facilisi sed te."
    imgName="what.png"
  />
  <AboutUsBox
    alignRight={false}
    aboutUsHeader="Why Trinidad & Tobago?"
    aboutUsBody="Access to sand and carbon, with easy access to shipping lanes"
    imgName="trinidad.png"
  />
  <AboutUsBox
    alignRight={true}
    aboutUsHeader="Why Partner With Us?"
    aboutUsBody="High quality product at competitive prices, Lorem ipsum dolor sit amet, quo utinam feugiat no, pro ea tota propriae officiis,"
    imgName="test.png"
  />
  <OurService
  />
  </div>
}
