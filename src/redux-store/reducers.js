import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import { todoPersistConfig } from "./persists";

const initialTodoState = {
  todos: [
    {
      id: 1,
      title: "Membuat React",
      completed: true
    },
    {
      id: 2,
      title: "Unit React Testing",
      completed: false
    },
    {
      id: 3,
      title: "Setup Development Environment React",
      completed: true
    },
    {
      id: 4,
      title: "Deploy ke server React",
      completed: false
    }
  ]
};

const TODO_CONSTANT = {
  SET_TODOS: "SET_TODOS",
  ADD_TODO: "todos/ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO"
};

// return sebuahState
// action itu object
const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case TODO_CONSTANT.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todoBaru]
      };

    case TODO_CONSTANT.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    case TODO_CONSTANT.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.todoID)
      };

    default:
      return state;
  }
};

export const addTodoAction = todo => {
  return {
    type: TODO_CONSTANT.ADD_TODO,
    todoBaru: todo
    // payload: {
    //   newTodo: todo
    // }
  };
};

const _setTodos = todos => {
  return {
    type: TODO_CONSTANT.SET_TODOS,
    payload: {
      todos
    }
  };
};

export const editTodo = id => {
  return {
    type: TODO_CONSTANT.EDIT_TODO,
    payload: {
      id
    }
  };
};

export const editTodoThunk = id => (dispatch, getState) => {
  const todos = getState().todoReducer.todos;
  const finnedTodoIndex = todos.findIndex(todo => todo.id === id);

  todos[finnedTodoIndex].completed = !todos[finnedTodoIndex].completed;
  dispatch(_setTodos(todos)); // bakal bikin ngelag
};

export const removeTodoAction = todoID => {
  return {
    type: TODO_CONSTANT.DELETE_TODO,
    payload: {
      todoID,
      gatauIniApaan: "haha"
    }
  };
};

const rootReducer = combineReducers({
  todoState: persistReducer(todoPersistConfig, todoReducer),
  todoGatau: persistReducer(todoPersistConfig, todoReducer),
  todoApa: persistReducer(todoPersistConfig, todoReducer)
});

export default rootReducer;
