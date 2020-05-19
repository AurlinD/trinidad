import React from "react";

import AboutUsBox from "../AboutUsBox.js";

export default function AboutUs() {
  return <div class="page">

  <AboutUsBox
    alignRight={true}
    aboutUsHeadder="What are Silicones?"
    aboutUsBody="Lorem ipsum dolor sit amet, quo utinam feugiat no, pro ea tota propriae officiis, dicit legendos at sit. Mea quando tritani ne, ne vix wisi labores. Singulis patrioque conclusionemque eu vim. Cum esse meis ut. Assueverit interpretaris ut usu, elit bonorum facilisi sed te."
    imgName="test.png"
  />
  <AboutUsBox
    alignRight={false}
    aboutUsHeadder="Why Trinidad & Tobago?"
    aboutUsBody="Access to sand and carbon, with easy access to shipping lanes"
    imgName="test.png"
  />
  <AboutUsBox
    alignRight={true}
    aboutUsHeadder="Why Partner With Us?"
    aboutUsBody="High quality product at competitive prices, Lorem ipsum dolor sit amet, quo utinam feugiat no, pro ea tota propriae officiis,"
    imgName="test.png"
  />
  </div>
}
