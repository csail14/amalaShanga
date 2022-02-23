import { combineReducers } from "redux";
import userReducer from "./userReducer";
import yogaReducer from "./yogaReducer";
import basketReducer from "./basketReducer";

const rootReducer = combineReducers({
  user: userReducer,
  yogaClasses: yogaReducer,
  basket: basketReducer,
});

export default rootReducer;
