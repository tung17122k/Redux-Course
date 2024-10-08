import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  action.payload = 5;
  next(action);
};
// redux-logger
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(loggerMiddleware),
});

store.subscribe(() => {
  // js observer pattern
  console.log(`current state : ${store.getState().counter.count}`);
});
// abc

export default store;
