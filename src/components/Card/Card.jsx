import React from "react";

import useIsMobile from "../../hooks/useIsMobile";
import Tooltip from "../ToolTip/ToolTip";
import {
  getFormattedIngredients,
  limitStringCharacters,
} from "../../utils/utils";

const Card = ({ beer }) => {
  const isMobile = useIsMobile();

  return (
    <div className="card_wrapper">
      <div className="card_container">
        <div
          className={beer?.image_url ? "card_img" : "loading img_loading"}
          data-tooltip="Ingredients"
        >
          {beer?.image_url && (
            <Tooltip
              content={getFormattedIngredients(beer?.ingredients)}
              direction="top"
            >
              <img src={beer?.image_url} loading="lazy" alt="beer image" />
            </Tooltip>
          )}
        </div>
        <div className="card_content">
          <h3 className={beer.name ? "card_title" : "loading"}>{beer?.name}</h3>
          <h5 className={beer.tagline ? "card_tagline" : "loading"}>
            {beer?.tagline}
          </h5>
          <div className={beer.description ? "card_description" : "loading"}>
            {limitStringCharacters(beer?.description, isMobile)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
