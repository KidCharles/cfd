import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Dental from "./Components/Dental/Dental";
import Vision from "./Components/Vision/Vision";
import Medicare from "./Components/Medicare/Medicare";
import Terms from "./Components/Terms/Terms";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/dental" component={Dental} />
    <Route path="/vision" component={Vision} />
    <Route path="/medicare" component={Medicare} />
    <Route path="/termsPrivacy" component={Terms} />
  </Switch>
);
