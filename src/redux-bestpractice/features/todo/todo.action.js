import TODO_CONSTANT from "./todo.constant";

export const addTodoAction = newTodoArgs => {
  return {
    type: TODO_CONSTANT.ADD_TODO,
    payload: {
      newTodo: newTodoArgs
    }
  };
};

export const removeTodoAction = id => {
  return {
    type: TODO_CONSTANT.DELETE_TODO,
    payload: {
      id
    }
  };
};

export const editTodoAction = id => {
  return {
    type: TODO_CONSTANT.EDIT_TODO,
    payload: {
      id
    }
  };
};

// const _setTodos = todos => {
//   return {
//     type: TODO_CONSTANT.SET_TODOS,
//     payload: {
//       todos
//     }
//   };
// };

// export const editTodoThunk = id => (dispatch, getState) => {
//   const todos = getState().todoReducer.todos;
//   const finnedTodoIndex = todos.findIndex(todo => todo.id === id);

//   todos[finnedTodoIndex].completed = !todos[finnedTodoIndex].completed;
//   dispatch(_setTodos(todos)); // bakal bikin ngelag
// };
