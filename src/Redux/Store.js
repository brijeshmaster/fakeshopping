import { createStore } from "redux";
import Reducers from "./Reducers/Index";

const Store = createStore(Reducers, {});

export default Store;
