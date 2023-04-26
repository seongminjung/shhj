import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Main from "routes/Main";
import Books1 from "routes/Books1";
import Books2 from "routes/Books2";
import About from "routes/About";
import Contact from "routes/Contact";
import ScrollToTop from "components/ScrollToTop";
import Navigation from "components/Navigation";

const AppRouter = ({ userObj }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="app-flex">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/books1">
            <Books1 />
          </Route>
          <Route exact path="/books2">
            <Books2 />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
