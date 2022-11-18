import * as React from "react";

const SVGComponent = ({ props }) => {
  console.log("SVGCOMPONENT", props);
  if (props.type === "pagination_down_arrow") {
    return paginationDownArrow();
  }
  return <></>;

  function paginationDownArrow() {
    return (
      <svg
        width="20px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z"
          fill="#2E82CE"
        />
      </svg>
    );
  }
};

export default SVGComponent;
