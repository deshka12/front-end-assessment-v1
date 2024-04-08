import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddProductPage, EditProductPage, ProductsPage } from "./pages";
import { Main, NotFound } from "./components";

export const App = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/" component={ProductsPage} />,
        <Route
          path="edit/:productId"
          render={({ match }) => (
            <EditProductPage productId={parseInt(match.params.productId)} />
          )}
        />
        ,
        <Route path="/add" component={AddProductPage} />,
        <Route path="*" component={NotFound} />,
      </Switch>
    </Main>
  </Router>
);
