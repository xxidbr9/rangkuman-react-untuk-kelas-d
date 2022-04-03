import { createSelector } from "@reduxjs/toolkit";

const allTodos = state => state.todoReducer.todos;
const allPersistTodos = state => state.todoPersisReducer.todos;

export const allTodoSelector = createSelector(allTodos, todos => todos);
export const allPersistTodoSelector = createSelector(
  allPersistTodos,
  todos => todos
);
