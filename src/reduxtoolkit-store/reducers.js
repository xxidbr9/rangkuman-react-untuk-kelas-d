import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import { todoReducer, todoPersisReducer } from "./features/todo";
import { persistStore } from "redux-persist";

const blackListedAction = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const store = configureStore({
  reducer: {
    todoReducer,
    todoPersisReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...blackListedAction]
      }
    }),
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
export const persistore = persistStore(store);
