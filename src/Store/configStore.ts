import { LoadingReducer } from './reducers/loadingReducer';
import { userReducer } from "./reducers/userReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { adminReducers } from './reducers/adminReducers';

const rootReducer = combineReducers({
  userReducer,
  LoadingReducer,
  adminReducers
});

export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
