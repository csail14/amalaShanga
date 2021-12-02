import { LOAD_USER_INFO, LOGOUT_USER_INFO } from "../actions/user/action-type";

const initialState = {
  isLogged: null,
  infos: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_INFO:
      return {
        isLogged: action.payload.isLogged,
        infos: action.payload.infos,
      };

    case LOGOUT_USER_INFO:
      return {
        isLogged: false,
        infos: null,
      };

    default:
      return state;
  }
};

export default UserReducer;
