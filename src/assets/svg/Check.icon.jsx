import * as React from "react"

const CheckIcon = ({ color, size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7 12 3.158 4L17 8"
      stroke={color || "#292D32"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CheckIcon