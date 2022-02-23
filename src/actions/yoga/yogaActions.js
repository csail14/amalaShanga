import { LOAD_YOGA_INFO } from "./action-type";

export const loadYogaInfo = (info) => {
  return function (dispatch) {
    dispatch({
      type: LOAD_YOGA_INFO,
      payload: {
        array: info,
      },
    });
  };
};
