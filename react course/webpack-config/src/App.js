import React, { components } from "react";
import { Link } from "react-router-doom";
import User from "../containers/components/"

class App extends component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users </Link>
          <Link to="/pizza"> Pizza</Link>
        </div>

        <div> 

          


        </div>
      </div>
    );
  }
}
