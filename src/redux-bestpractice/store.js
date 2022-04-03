import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
import { persistStore } from "redux-persist";

const appStore = () => {
  /* 
    thunk 
    dipakai untuk menghandle asynchronous data
    https://github.com/reduxjs/redux-thunk 
  */
  const middleWare = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleWare);

  /* 
    composeWithDevTools
    dipakai untuk debuging dengan tools redux dev tools
    https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  */
  const composedMiddleware = composeWithDevTools(middlewareEnhancer);

  // ini store utama, mirip seperti value dalam createContext / context API
  return createStore(rootReducers, composedMiddleware);
};

const store = appStore();

export const persistore = persistStore(store);

export default store;
