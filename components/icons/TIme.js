import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666Zm0-1.666a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334ZM10.833 10h3.334v1.667h-5V5.833h1.666V10Z"
      fill="#081212"
    />
  </svg>
)

export default SvgComponent