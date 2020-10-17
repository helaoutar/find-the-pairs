import { createStore, compose } from "redux";
import reducers from "../reducers";
import { createWrapper } from "next-redux-wrapper";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const makeStore = () => createStore(reducers, undefined, composeEnhancers());

export const wrapper = createWrapper(makeStore, { debug: true });
