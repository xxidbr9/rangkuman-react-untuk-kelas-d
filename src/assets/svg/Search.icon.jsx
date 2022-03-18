import * as React from "react"

const SearchIcon = ({ color, ...props }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={10.667}
      cy={10.667}
      r={6.667}
      stroke={color || "#292D32"}
      strokeWidth={1.5}
    />
    <path
      d="m20 20-1.778-1.778-.889-.889-1.777-1.777M14.667 16.445c1.3-.157 1.704-.54 1.777-1.778"
      stroke={color || "#292D32"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
)

export default SearchIcon