import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore } from "redux-persist";
const appStore = () => {
  const middleWare = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleWare);
  const composedMiddleware = composeWithDevTools(middlewareEnhancer);
  return createStore(reducers, composedMiddleware);
};

const store = appStore();
export const persistore = persistStore(store);

export default store;
