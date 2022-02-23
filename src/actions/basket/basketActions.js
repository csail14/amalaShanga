import { ADD_IN_BASKET, DELETE_IN_BASKET, CLEAN_BASKET } from "./action-type";

export const addInBasket = (product) => {
  console.log("ajout de", product);
  return function (dispatch) {
    dispatch({
      type: ADD_IN_BASKET,
      payload: {
        array: product,
      },
    });
  };
};

export const cleanBasket = () => {
  return function (dispatch) {
    dispatch({
      type: CLEAN_BASKET,
      payload: {
        array: [],
      },
    });
  };
};

export const deleteInBasket = (product) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_IN_BASKET,
      payload: {
        array: product,
      },
    });
  };
};
