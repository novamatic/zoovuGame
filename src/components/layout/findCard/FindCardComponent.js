import React from "react";
import "./FindCard.scss";
import StaticCard from "../../cards/staticCard/StaticCardComponent";

const FindCard = ({ partToFind }) => {

  return (
    <div className="f-vertical find-card-wrapper">
      <h2>Find this card!</h2>
      <StaticCard classes={`empty-slot-logo reversed-${partToFind}`} />
    </div>
  );
};

export default FindCard;
