import React, { Component } from "react";
import axios from "../../axios-order";
import Order from "./../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    loading: true,
    orders: []
  };

  componentDidMount() {
    axios
      .get("./orders.json")
      .then(res => {
        //console.log(res.data);
        const fetchedOrders = [];
        for (let key in res.data)
          fetchedOrders.push({ ...res.data[key], id: key });
        //console.log(fetchedOrders);
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    //console.log(this.state.orders);
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
