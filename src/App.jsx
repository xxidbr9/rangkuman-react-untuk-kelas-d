import styled from '@emotion/styled'
import React from 'react'
import Button from './components/Button'
import Container from './components/Container'
import Header from './components/Header'
import List from './components/List'
import ListItem from './components/ListItem'
import userMock from './utils/mocks/user.mocks'
import colors from './utils/styles/colors'

// react itu render sebuah array
const App = () => {

  const listMentee = [
    "Rama",
    "Rio",
    "Mika",
    "Zaidan",
    "Maulana",
    "Farah",
  ]

  // item => satu reperesentasi isi dari array
  // map itu mereturn panjang yang sama
  const mentees = listMentee.map((item,) => {
    return (
      // li di dalam div
      <div style={{ color: "pink" }}>
        {item}
      </div>
    )
  })

  /* 
    RUMUS PENAMAAN SEBUAH VARIABLE
    - [ ] boolean => (is, can) didepannya => isShow / canWait / isObjectCanBeRemove => pasti boolean
    - [ ] datanya banyak aku pakein s di belakangya => dog, dogs, number, numbers, siswa, siswas, listSiswa 
  */
  // kenapa banya pakai map

  return (
    <React.Fragment>
      <Header >
        To Do apps
      </Header>
      <Container>
        <List todos={userMock} />
      </Container>
      <StyledFixed >
        <Container >
          <Button>
            Add ToDo
          </Button>
        </Container>
      </StyledFixed>
    </React.Fragment>
  )
}

export default App

const StyledFixed = styled.div`
  position: fixed;
  width:100%;
  bottom: 0;
  padding: 1.5rem 0;
  border-top: 1.5px solid ${colors.secondary};
`