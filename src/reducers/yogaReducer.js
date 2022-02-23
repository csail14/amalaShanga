import { LOAD_YOGA_INFO } from "../actions/yoga/action-type";

const initialState = {
  array: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_YOGA_INFO:
      return {
        array: action.payload.array,
      };

    default:
      return state;
  }
};

export default UserReducer;
