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
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/customorder" exact component={CustomOrder} />
            <Route path="/whatwedo" exact component={WhatWeDo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
