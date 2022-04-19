import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import List from "../components/List";
import userMock from "../utils/mocks/user.mocks";
import colors from "../utils/styles/colors";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../redux-store/reducers";
import { nanoid } from "nanoid";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const todos = useSelector(globalState => globalState.todoState.todos);

  const _handleClose = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Header>To Do apps</Header>
      <Container>
        <List todos={todos} />
      </Container>
      <StyledFixed>
        <Container>
          <Button onClick={() => setIsOpen(!isOpen)}>New ToDo</Button>
          <InputTodo open={isOpen} onDismiss={_handleClose} />
        </Container>
      </StyledFixed>
    </React.Fragment>
  );
};

const InputTodo = ({ open, onDismiss }) => {
  const sheetRef = useRef();

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const _handleInputChange = e => {
    setTitle(e.target.value);
  };

  const _handleAddNewTodo = () => {
    const id = nanoid();

    const newTodo = {
      id,
      title,
      complete: false
    };

    dispatch(addTodoAction(newTodo));
    // object ini dikirim menjadi action di reducer
    dispatch({
      todoBaru: {
        id,
        complete: false,
        title: "ini sebuah title"
      },
      type: "todos/ADD_TODO"
    });

    onDismiss();
    setTitle("");
  };

  const _handleInputEnter = e => {
    if (e.key === "Enter") _handleAddNewTodo();
  };

  return (
    <BottomSheet
      open={open}
      onDismiss={onDismiss}
      ref={sheetRef}
      snapPoints={({ minHeight, maxHeight }) => [minHeight]}>
      <ContainerFlex>
        <InputStyled
          placeholder='Apa yang ingin kamu lakukan?'
          onChange={_handleInputChange}
          onKeyDown={_handleInputEnter}
        />
        <Button onClick={_handleAddNewTodo}>Add ToDo</Button>
      </ContainerFlex>
    </BottomSheet>
  );
};

export default HomePage;

const StyledFixed = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 1.5rem 0;
  border-top: 1.5px solid ${colors.secondary};
`;

const ContainerFlex = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const InputStyled = styled.input`
  width: calc(100% - 2rem);
  padding: 0.725rem 1rem;
  outline: none;
  border: 0;
  background-color: ${colors["input-secondary"]};
  color: black;
  font-weight: 600;
  border-radius: 12px;
`;
