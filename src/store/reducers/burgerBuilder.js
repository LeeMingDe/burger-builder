import * as actionTypes from '../actions/actionTypes';
import {updateObject} from './utility'

const INGREDIENT_PRICES = {
  salad: 0.3,
  bacon: 0.7,
  cheese: 0.5,
  meat: 1.3
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
}

const addIngredient = (state, action) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject(state, updatedState);
}

const setIngredient = (state, action) => {
  return updateObject(state, {
    ...state,
    ingredients: action.ingredients,
    totalPrice: 4,
    error: false
  })
}

const fetchIngredientFail = (state, action) => {
  return updateObject(state, {error: true})
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case (actionTypes.ADD_INGREDIENT):
      return addIngredient(state, action);
    case (actionTypes.REMOVE_INGREDIENT):
      return removeIngredient(state, action);
    case (actionTypes.SET_INGREDIENTS):
      return setIngredient(state, action);
    case actionTypes.FETCH_INGREDIENT_FAIL:
      return fetchIngredientFail(state, action);
    default:
      return state;
  }
}

export default reducer;