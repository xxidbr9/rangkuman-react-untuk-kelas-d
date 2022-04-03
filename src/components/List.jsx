import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodoAction } from "../redux-store/reducers";
import ListItem from "./ListItem";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  row-gap: 16px;
`;

const List = ({ todos, ...props }) => {
  const dispatch = useDispatch();

  const _handleClick = id => {
    dispatch(editTodo(id));
  };

  const _handleRemove = id => {
    dispatch(removeTodoAction(id));
  };

  return (
    <StyledUl>
      {todos.map(todo => (
        <ListItem
          key={todo.id}
          id={todo.id}
          isComplete={todo.completed}
          onDelete={() => _handleRemove(todo.id)}
          onClick={() => _handleClick(todo.id)}>
          {todo.title}
        </ListItem>
      ))}
    </StyledUl>
  );
};

export default List;
