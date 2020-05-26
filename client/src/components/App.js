import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import history from "./history";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Service from "./pages/Service";
import aerospaceAndMarine from "./subPages/aerospaceAndMarine";
import automotive from "./subPages/automotive";
import construction from "./subPages/construction";
import customFormulations from "./subPages/customFormulations";
import electronics from "./subPages/electronics";
import manufacturing from "./subPages/manufacturing";
import medicalAndSurgical from "./subPages/medicalAndSurgical";
import personalCareAndBeauty from "./subPages/personalCareAndBeauty";
import solarAndEnergy from "./subPages/solarAndEnergy";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
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
              component={aerospaceAndMarine}
            />
            <Route path="/automotive" exact component={automotive} />
            <Route path="/construction" exact component={construction} />
            <Route
              path="/custom_formulations"
              exact
              component={customFormulations}
            />
            <Route path="/electronics" exact component={electronics} />
            <Route path="/manufacturing" exact component={manufacturing} />
            <Route
              path="/medical_surgical"
              exact
              component={medicalAndSurgical}
            />
            <Route
              path="/personal_care_beauty"
              exact
              component={personalCareAndBeauty}
            />
            <Route path="/solar_energy" exact component={solarAndEnergy} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
