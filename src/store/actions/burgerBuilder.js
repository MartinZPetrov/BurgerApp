import * as actionTypes from './actionType';
import axios from '../../axios-orders';

export const addIngredient = name => {
  return {
    ingredientName: name,
    type: actionTypes.ADD_INGREDIENT
  };
};

export const removeIngredient = name => {
  return {
    ingredientName: name,
    type: actionTypes.REMOVE_INGREDIENT
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get('https://react-burger-app-42e76.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed())
      });
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};
