import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import testReducer from "@redux/reducers/test.reducer";

const initialState: AllStates = {
  tests: {
    tests: [],
  },
};

const store: Store = createStore(
  combineReducers<AllStates>({
    tests: testReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
