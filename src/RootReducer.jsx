import Reducer from "./Reducer";
import CartReducer from "./CartReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    reducer : Reducer,
    cartreducer : CartReducer
})

export default RootReducer;