import React from "react";

import Card from "../Card/Card";

const Content = ({ data, next }) => {
  return (
    <div className="content_wrapper">
      {!data && <p className="content_title">No Beers Found</p>}
      {!data && next && <p className="content_title">Loading Beers</p>}
      <div className="card_wrapper">
        {data.map((beer) => (
          <Card beer={beer} key={beer.id} />
        ))}
      </div>
    </div>
  );
};

export default Content;
