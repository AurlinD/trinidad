import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Service from "./pages/Service";
import AerospaceAndMarine from "./subPages/aerospaceAndMarine";
import Automotive from "./subPages/automotive";
import Construction from "./subPages/construction";
import CustomFormulations from "./subPages/customFormulations";
import Electronics from "./subPages/electronics";
import Manufacturing from "./subPages/manufacturing";
import MedicalAndSurgical from "./subPages/medicalAndSurgical";
import PersonalCareAndBeauty from "./subPages/personalCareAndBeauty";
import SolarAndEnergy from "./subPages/solarAndEnergy";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
  return (
    <div className="ui container">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <div className="container">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about_us" exact component={AboutUs} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/order" exact component={Order} />
            <Route path="/service" exact component={Service} />
            <Route
              path="/aerospace_marine"
              exact
              component={AerospaceAndMarine}
            />
            <Route path="/automotive" exact component={Automotive} />
            <Route path="/construction" exact component={Construction} />
            <Route
              path="/custom_formulations"
              exact
              component={CustomFormulations}
            />
            <Route path="/electronics" exact component={Electronics} />
            <Route path="/manufacturing" exact component={Manufacturing} />
            <Route
              path="/medical_surgical"
              exact
              component={MedicalAndSurgical}
            />
            <Route
              path="/personal_care_beauty"
              exact
              component={PersonalCareAndBeauty}
            />
            <Route path="/solar_energy" exact component={SolarAndEnergy} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
