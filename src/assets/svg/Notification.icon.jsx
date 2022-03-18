import * as React from "react"

const NotificationIcon = ({ color, ...props }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 3.943V3a1 1 0 1 1 2 0v1" stroke={color || "#292D32"} strokeWidth={1.5} />
    <path
      d="M17.729 15.582c-1.412-2.296-1.52-4.52-1.05-6.937C17.133 6.307 15.55 4 13.167 4h-2.601c-2.082.176-3.644 2.339-3.307 4.39.547 2.197.519 3.842-.96 6.993"
      stroke={color || "#292D32"}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <ellipse
      cx={12}
      cy={16.5}
      rx={7}
      ry={1.5}
      stroke={color || "#292D32"}
      strokeWidth={1.5}
    />
    <path
      d="M14 21s-.333 1-2 1-2-1-2-1"
      stroke={color || "#292D32"}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default NotificationIcon
