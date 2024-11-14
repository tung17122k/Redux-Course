import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log(action);
//   action.payload = 5;
//   next(action);
// };
// redux-logger
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

// store.subscribe(() => {
//   // js observer pattern
//   console.log(`current state : ${store.getState().counter.count}`);
// });
// sagaMiddleware.run(rootSaga);

export default store;
