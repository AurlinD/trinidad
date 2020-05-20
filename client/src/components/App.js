import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "./history";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CustomOrder from "./pages/CustomOrder";
import WhatWeDo from "./pages/WhatWeDo";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about_us" exact component={AboutUs} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/custom_order" exact component={CustomOrder} />
            <Route path="/what_we_do" exact component={WhatWeDo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
