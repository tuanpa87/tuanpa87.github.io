import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
// import Checkout from "./containers/Checkout/Checkout";
// import Orders from "./containers/Orders/Orders";
// import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/rootAction";


const asyncCheckout = asyncComponent ( () => import('./containers/Checkout/Checkout'));
const asyncOrder = asyncComponent ( () => import('./containers/Orders/Orders'));
const asyncAuth = asyncComponent ( () => import('./containers/Auth/Auth'));

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrder} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
