import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../_helpers";
import { HomePage } from "../HomePage";
import { DetailsPage } from "../DetailsPage";
import { CardPage } from "../CardPage";
import { Header } from "../_components";
import { Footer } from "../_components";
import "./styles.css";

function App() {
  const loading = useSelector((state) => state.categories.loading);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <Header />

      <div className="container mt-3">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/category/:name" component={DetailsPage} />
            <Route exact path="/deatils/:id" component={CardPage} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export { App };
