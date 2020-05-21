import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "./history";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Service from "./pages/Service";

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
            <Route path="/order" exact component={Order} />
            <Route path="/service" exact component={Service} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
