import {
  ADD_IN_BASKET,
  CLEAN_BASKET,
  DELETE_IN_BASKET,
} from "../actions/basket/action-type";

const initialState = {
  products: [],
};

const BasketReducer = (state = initialState, action) => {
  console.log("new product", action.payload);
  switch (action.type) {
    case ADD_IN_BASKET:
      return {
        products: [...state.products, action.payload.array],
      };

    case DELETE_IN_BASKET:
      return {
        products: state.products.filter((el) => el !== action.payload.array),
      };

    case CLEAN_BASKET:
      return {
        products: [],
      };

    default:
      return state;
  }
};

export default BasketReducer;
