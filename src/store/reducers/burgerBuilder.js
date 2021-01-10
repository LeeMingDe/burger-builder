import * as actionTypes from '../actions/actionTypes';

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

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case (actionTypes.ADD_INGREDIENT):
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case (actionTypes.REMOVE_INGREDIENT):
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        }   ,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]  
      };
    case (actionTypes.SET_INGREDIENTS):
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false
      }
    case actionTypes.FETCH_INGREDIENT_FAIL:
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;