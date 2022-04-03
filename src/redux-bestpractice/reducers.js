import { combineReducers } from "redux";
import { todoPersistedReducer } from "./features/todo";

const rootReducer = combineReducers({
  todoReducer: todoPersistedReducer
});

export default rootReducer
