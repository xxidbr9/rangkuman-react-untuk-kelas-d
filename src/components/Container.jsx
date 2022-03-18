import styled from "@emotion/styled";

const Container = styled.div`
  width: auto;
  padding: 0 1.5rem;
`

/* 
Sama dengan ini
const Container1 = ({ children }) => {
  return (
    <div style={{ width: "auto", padding: "0 1.5rem" }}>
      {children}
    </div>
  )
} */

export default Container