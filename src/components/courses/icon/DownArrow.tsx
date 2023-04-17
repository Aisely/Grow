import React from "react";

const DownArrow = ({w,h,fill}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 32 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4062 19.0938C15.25 19.9375 16.6562 19.9375 17.5 19.0938L30.25 6.34375C31.1875 5.40625 31.1875 4 30.25 3.15625L28.1875 1C27.25 0.15625 25.8438 0.15625 25 1L15.9062 10.0938L6.90625 1C6.0625 0.15625 4.65625 0.15625 3.71875 1L1.65625 3.15625C0.71875 4 0.71875 5.40625 1.65625 6.34375L14.4062 19.0938Z"
        fill={fill}
      />
    </svg>
  );
};

export default DownArrow;
