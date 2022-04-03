import styled from "@emotion/styled";
import propTypes from "prop-types";
import React from "react";
import CheckIcon from "../assets/svg/Check.icon";
import TrashIcon from "../assets/svg/Trash.icon";
import colors from "../utils/styles/colors";
import Icon from "./Icon";

const WrapperList = styled.li`
  list-style-type: none;
  width: auto;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  column-gap: 16px;
  & input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  & label {
    color: ${props => (props.isChecked ? "#808080" : "#000")};
    text-decoration: ${props => (props.isChecked ? "line-through" : "none")};
    transition: all ease-out 0.1s;
    font-size: 1rem;
  }

  & .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    background: #fff;
    border: 2px #ddd solid;
    border-radius: 8px;
    overflow: hidden;
    .icon {
      display: none;
    }
  }

  & .checkbox--active {
    height: 24px;
    width: 24px;
    border-color: ${colors.ternary};
    background: ${colors.ternary};
    transition: all ease-out 0.2s;
    .icon {
      display: block;
    }
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TodoItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: .75rem;
`

const ListItem = ({ isComplete, children, onClick, onDelete, ...props }) => {
  return (
    <WrapperList isChecked={isComplete}>
      <FlexDiv>
        <TodoItemStyled>
          <input
            type={"checkbox"}
            checked={isComplete}
            value={isComplete}
            name={"checkbox"}
          />
          <span
            onClick={onClick}
            className={`checkbox ${isComplete ? "checkbox--active" : ""}`}
            // buat hide element secara teori
            aria-hidden='true'>
            <CheckIcon color={"#ffffff"} size={24} className={"icon"} />
          </span>
          <label onClick={onClick} htmlFor='checkbox'>
            {children}
          </label>
        </TodoItemStyled>
        <Icon src={() => <TrashIcon color={colors.ternary}/>} onClick={onDelete} />
      </FlexDiv>
    </WrapperList>
  );
};

ListItem.propTypes = {
  isComplete: propTypes.bool
};

export default ListItem;
