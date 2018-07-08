import burderBuilderReducer from "./burgerBuilder";
import orderReducer from "./order";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  burgerBuilder: burderBuilderReducer,
  order: orderReducer
});

export default rootReducer;
