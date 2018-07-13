import React, { components } from "react";
import { Link, Route } from "react-router-dom";
import Users from "../containers/Users";
import asyncComponent from "./hoc/asyncComponent";

const AsyncPizza = asyncComponent(() => import("../containers/Pizza"));

class App extends component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users </Link>
          <Link to="/pizza"> Pizza</Link>
        </div>

        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" exact component={AsyncPizza} />
        </div>
      </div>
    );
  }
}
