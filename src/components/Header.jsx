import styled from '@emotion/styled'
import React from 'react'
import MenuIcon from '../assets/svg/Menu.icon'
import NotificationIcon from '../assets/svg/Notification.icon'
import SearchIcon from '../assets/svg/Search.icon'
import Search from '../assets/svg/Search.icon'
import colors from '../utils/styles/colors'
import Container from './Container'
import Icon from './Icon'

// pembuatan sebuah component perlu huruf besar diawal / kapital case
// kalau depanya huruf kecil, react bakal ngira dia bawaan html
// kalau ingin membuat huruf kecil didepan, harus pakai object
// const spanStyled = {
//   Span: ({ children }) => <span>{children}</span>
// }

const SpanStyled = styled.h1`
  color:#030303 ;
  font-size: 1.25rem; // font size body, em itu font size parent
`

// const SpanStyled = ({ children }) => {
//   return <h1>{children}</h1>
// }

const WrapperMenu = styled.div`
  display:flex;
  column-gap: 24px ;
`

const WrapperHeader = styled.nav`
  display:flex;
  justify-content: space-between;
  width:100% ;
  align-items:center;
  padding: 8px 0;
`

// jsx => javascript xml
// react itu hanya mereturn 1 jsx / tag html
const Header = ({ children, ...props }) => { // props itu sebagai attribute dalam tag html
  return (
    <Container style={{ borderBottom: `1px solid ${colors.secondary}` }}>
      <WrapperHeader> {/* ini sebuatannya fragment */}
        <SpanStyled>{children}</SpanStyled>
        <WrapperMenu>
          <Icon src={SearchIcon} />
          <Icon src={NotificationIcon} badge={20} />
          <Icon src={MenuIcon} />
        </WrapperMenu>
      </WrapperHeader>
    </Container>
    // <> sama <React.Fragment> itu sama, tapi lebih ditujukan buat kemudahan membaca
  )
}

export default Header

{/* <Header id={} name={} /> id dan nama itu sebuah props */ }

{/* 
<Navbar>
  di dalam sini itu si children
</Navbar> 
*/}

{/* <Navbar children={} /> => tidak direkomendasikan, karna bikin bingung*/ }