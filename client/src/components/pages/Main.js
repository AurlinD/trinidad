import React from "react";

import AboutUsBox from "../AboutUsBox.js";
import OurService from "../OurService.jsx"
import "../styles/home.css"

export default function Main() {
  return <div>
    <div class="hero">
    </div>

    <AboutUsBox
      alignRight={true}
      aboutUsHeader="ABOUT US"
      aboutUsBody="Lorem ipsum dolor sit amet, quo utinam feugiat no, pro ea tota propriae officiis, dicit legendos at sit. Mea quando tritani ne, ne vix wisi labores. Singulis patrioque conclusionemque eu vim. Cum esse meis ut. Assueverit interpretaris ut usu, elit bonorum facilisi sed te."
      imgName="what.png"
    />

    <div class="home-spacer">
    </div>

    <div class="past-clients">
    </div>

    <div class="home-spacer">
    </div>

    <OurService
    />

  </div>
}
