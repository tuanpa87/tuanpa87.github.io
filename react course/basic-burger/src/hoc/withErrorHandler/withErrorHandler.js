import React, { Component } from "react";
import Aux from "../reactAux/reactAux";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInderceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInderceptor = axios.interceptors.response.use(
        res => res,
        error => this.setState({ error: error })
      );
    }

    componentWillUnmount () {
      console.log('Will unmount', this.reqInderceptor, this.resInderceptor)
      axios.interceptors.request.eject(this.reqInderceptor);
      axios.interceptors.response.eject(this.resInderceptor);
    }

    errorConfirmHandler = () => this.setState({ error: null });

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
            {" "}
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
