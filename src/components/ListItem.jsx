import styled from '@emotion/styled'
import propTypes from 'prop-types'
import React, { useState } from 'react'
import CheckIcon from '../assets/svg/Check.icon'
import colors from '../utils/styles/colors'


const WrapperList = styled.li`
  list-style-type:none;
  padding: 0;
  margin:0;
  display: flex;
  align-items:center;
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
  & label{
    color:${props => props.isChecked ? "#808080" : "#000"};
    text-decoration: ${props => props.isChecked ? "line-through" : "none"};
    transition: all ease-out .1s ;
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
    overflow:hidden;
    .icon {
        display: none;
    }
  }

  & .checkbox--active {
    height: 24px;
    width: 24px;
    border-color: ${colors.ternary};
    background: ${colors.ternary};
    transition: all ease-out .2s;
    .icon{
      display: block;
    }
  }
`

const ListItem = ({ isComplete, children, ...props }) => {

  const [isChecked, setIsChecked] = useState(isComplete)

  const _handleClick = () => {
    setIsChecked((prevValue) => !prevValue)
  }

  return (
    <WrapperList onClick={_handleClick} isChecked={isChecked}>
      <input type={"checkbox"} checked={isChecked} name={"checkbox"} />
      <span
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        // buat hide element secara teori
        aria-hidden="true"
      >
        <CheckIcon color={"#ffffff"} size={24} className={"icon"} />
      </span>
      <label htmlFor="checkbox">{children}</label>
    </WrapperList>
  )
}

ListItem.propTypes = {
  isComplete: propTypes.bool
}

export default ListItem