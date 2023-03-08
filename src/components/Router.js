import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "routes/Main";
import Books from "routes/Books";
import About from "routes/About";
import Contact from "routes/Contact";
import ScrollToTop from "components/ScrollToTop";

const AppRouter = ({ userObj }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
