import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./ProductReducer";

const Reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductReducer,
});

export default Reducers;
