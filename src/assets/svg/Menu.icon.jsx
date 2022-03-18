import * as React from "react"

// DRY => Don't Repeat by Your self
// KISS => Keep It Simple Stupid => biar readble / biar gampang dibaca
const MenuIcon = ({...props}) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 6h9M5 18h6M5 12h14"
      stroke={"#292D32"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
)

export default MenuIcon
