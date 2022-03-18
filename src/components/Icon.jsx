import styled from '@emotion/styled'
import React from 'react'
import colors from '../utils/styles/colors'


const WrapperStyled = styled.div`
  position: relative;
  width:24px;
  height:24px ;
`

const BadgeStyled = styled.div`
  position: absolute;
  font-size: 8px;
  padding: 2px 4px;
  border-radius: 6px;
  color: white;
  background-color: ${colors.primary};
  top: -2px;
  right: -2px;
`

const Icon = ({ badge = 0, src, color, ...props }) => {

  const IconSrc = src

  return (
    <WrapperStyled>
      {!!badge && <BadgeStyled>{badge}</BadgeStyled>}
      <IconSrc color={color} />
    </WrapperStyled>
  )
}

export default Icon