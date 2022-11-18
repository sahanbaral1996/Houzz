import React from "react";
import Content from "../Content/Content";
import { addBeerRequested } from "../../redux/Beer/BeerAction";
import { useDispatch } from "react-redux";

const Beer = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="content_wrapper">
      <div className="custom_beer_wrapper">
        {data.length > 0 ? (
          <Content data={data} />
        ) : (
          <div className="empty_beer_content">
            <p className="empty_text">{`Nothing to see yet.`}</p>
            <p className="empty_text">
              {
                <button
                  className="link_button"
                  onClick={() => {
                    dispatch(addBeerRequested());
                  }}
                >
                  Click here
                </button>
              }
              {` to add your first beer!`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beer;
