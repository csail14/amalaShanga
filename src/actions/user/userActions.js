import { LOAD_USER_INFO, LOGOUT_USER_INFO } from "./action-type";

export const loadUserInfo = (isLogged, user) => {
  return function (dispatch) {
    dispatch({
      type: LOAD_USER_INFO,
      payload: {
        isLogged: isLogged,
        infos: user,
      },
    });
  };
};

export const logoutUser = () => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_USER_INFO,
      payload: null,
    });
  };
};
