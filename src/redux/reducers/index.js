import { combineReducers } from "redux";
import BmiReducer from "./BmiReducer";

export default combineReducers({
  bmiRdx: BmiReducer,
});
