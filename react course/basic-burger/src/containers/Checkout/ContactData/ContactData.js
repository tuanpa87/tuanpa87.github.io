import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-order";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    //console.log(this.props);
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.price,
      customer: {
        name: "somename",
        address: {
          street: "somestreet",
          zipCode: "325325",
          country: "VN"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fast"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form action="">
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          {" "}
          ORDER{" "}
        </Button>
      </form>
    );

    if (this.state.loading) form = <Spinner />;
    return (
      <div className={classes.ContactData}>
        <h4> Please enter your contact information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
