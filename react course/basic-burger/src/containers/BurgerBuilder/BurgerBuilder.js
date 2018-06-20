import React, { Component } from "react";
import Aux from "../../hoc/reactAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.2,
  bacon: 1.5,
  cheese: 0.5,
  meat: 1.1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngrediens = {
      ...this.state.ingredients
    };

    updateIngrediens[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updateIngrediens,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updateIngrediens);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;
    const updateIngrediens = {
      ...this.state.ingredients
    };
    updateIngrediens[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updateIngrediens,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updateIngrediens);
  };

  render() {
    const disalbedInfo = {
      ...this.state.ingredients
    };

    for (let key in disalbedInfo) {
      disalbedInfo[key] = disalbedInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          addIngridient={this.addIngredientHandler}
          removeIngridient={this.removeIngredientHandler}
          disabled={disalbedInfo}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
