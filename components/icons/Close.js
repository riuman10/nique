import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={45}
    height={45}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#ffff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <path
      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      stroke="#ffff"
      strokeLinejoin="round"
    />
    <path
      d="M29.657 18.343 18.343 29.657M18.343 18.343l11.314 11.314"
      stroke="#ffff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
