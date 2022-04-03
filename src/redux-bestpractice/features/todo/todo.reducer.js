import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import TODO_CONSTANT from "./todo.constant";

// state besar yang mirip dengan useState object
const initialTodoState = {
  todos: []
};

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case TODO_CONSTANT.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.newTodo]
      };

    case TODO_CONSTANT.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case TODO_CONSTANT.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };

    default:
      return state;
  }
};
export default todoReducer;

const todoPersistConfig = {
  storage,
  key: "todos"
};

export const todoPersistedReducer = persistReducer(
  todoPersistConfig,
  todoReducer
);
