import React from "react";

import AboutUsBox from "../AboutUsBox.js";

export default function AboutUs() {
  return <div class="page">

  <AboutUsBox
    alignRight={false}
  />
  <AboutUsBox
    alignRight={true}
  />
  <AboutUsBox
    alignRight={false}
  />
  </div>
}
