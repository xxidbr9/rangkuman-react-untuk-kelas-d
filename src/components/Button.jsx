import styled from "@emotion/styled";
import colors from '../utils/styles/colors'
const Button = styled.button`
  padding: 0.725rem 0;
  width: 100%;
  outline:none;
  border: 0;
  background-color: ${colors.primary};
  color: white;
  font-weight: 600;
  border-radius: 12px;
  &:active,
  &:hover{
    background-color: ${colors.primary};
    filter: brightness(50%);
    transition: all ease-out .25;
  }
`
export default Button
