import React from "react";

const PlayButton = ({w, h, fill}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 0.0625C8.36719 0.0625 0.5625 7.86719 0.5625 17.5C0.5625 27.1328 8.36719 34.9375 18 34.9375C27.6328 34.9375 35.4375 27.1328 35.4375 17.5C35.4375 7.86719 27.6328 0.0625 18 0.0625ZM26.0859 19.1875L13.7109 26.2891C12.5859 26.9219 11.25 26.1484 11.25 24.8125V10.1875C11.25 8.92188 12.5859 8.14844 13.7109 8.71094L26.0859 16.2344C27.2812 16.9375 27.2812 18.5547 26.0859 19.1875Z"
        fill={fill}
      />
    </svg>
  );
};

export default PlayButton;
