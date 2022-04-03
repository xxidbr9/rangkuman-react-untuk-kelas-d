import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const todoSlice = createSlice({
  initialState: {
    todos: []
  },
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      return {
        todos: [...state.todos, action.payload]
      };
    },
    editTodo: (state, action) => {
      // ambil todo
      const finnedTodo = state.todos.find(
        todo => todo.id === action.payload.id
      );
      // cari nomor indexnya
      const finnedTodoIndex = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );

      if (finnedTodo) {
        finnedTodo.completed = !finnedTodo.completed;
      }
      // merubah todo
      state.todos[finnedTodoIndex] = finnedTodo;
    },
    removeTodo: (state, action) => {
      const finnedTodoIndex = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );

      // menghapus satu todo yang ketemu
      state.todos.splice(finnedTodoIndex, 1);
    }
  }
});

// redux persist
const todoPersistConfig = {
  storage,
  key: "todos"
};

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

// jika perlu sebuah reducer yang tersimpan di localStorage
export const todoPersisReducer = persistReducer(
  todoPersistConfig,
  todoReducer
);
