import styled from '@emotion/styled'
import React from 'react'
import ListItem from './ListItem'


const StyledUl = styled.ul`
  display:flex;
  flex-direction: column;
  padding:1rem 0;
  row-gap: 16px;
`

const List = ({ todos, ...props }) => {
  return (
    <StyledUl>
      {todos.map((todo) => (
        <ListItem
          key={todo.key}
          isComplete={todo.completed}
        >
          {todo.title}
        </ListItem>
      ))}
    </StyledUl>
  )
}

export default List