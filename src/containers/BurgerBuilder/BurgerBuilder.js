import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.3,
  bacon: 0.7,
  cheese: 0.5,
  meat: 1.3
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice : 2,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => sum + el, 0);
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients, totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = type => {
    const updatedCount = this.state.ingredients[type] - 1;
    if (updatedCount < 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients, totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHander = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal 
          show = {this.state.purchasing}
          modalClosed = {this.purchaseCancelHander}>
          <OrderSummary 
          ingredients = {this.state.ingredients}
          price = {this.state.totalPrice}
          purchaseCancelled = {this.purchaseCancelHander}
          purchaseContinue = {this.purchaseContinueHandler}/>
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls 
          addIngredient = {this.addIngredientHandler} 
          removeIngredient = {this.removeIngredientHandler}
          disabledInfo = {disabledInfo}
          purchasable = {this.state.purchasable}
          price = {this.state.totalPrice}
          ordered = {this.purchaseHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
