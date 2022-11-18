import React from "react";
import SVGComponent from "../SVGComponent/SVGComponent";
import LineLoader from "../Spinner/LineLoader";

const Pagination = ({ onClick, next }) => {
  const props = { type: "pagination_down_arrow" };
  return (
    <div className="pagination_wrapper" onClick={() => onClick()}>
      {!next && (
        <div className="pagination">
          <p>Load More</p>
          <SVGComponent props={props} />
        </div>
      )}
      {next && <LineLoader />}
    </div>
  );
};

export default Pagination;
