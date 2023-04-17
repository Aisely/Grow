import React from "react";

const Ellipse = ({w, h, fill}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 1440 1469"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M892.917 65.9836C1440.18 314.74 1535.91 660.665 1439.7 957.893C1356.95 1320.84 933.74 1532.52 521.77 1451.12C136.184 1374.93 -91.8177 959.195 11.1004 575.099C73.7346 341.346 345.652 -182.773 892.917 65.9836Z"
        fill={fill}
      />
    </svg>
  );
};

export default Ellipse;
