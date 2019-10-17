import React, { useEffect, useState } from "react";
import "./FindCard.scss";
import StaticCard from "../cards/staticCard/StaticCardComponent";

const FindCard = ({ hiddenPictureParts }) => {
  const [partToFind, setPartToFind] = useState(
    hiddenPictureParts[Math.floor(Math.random() * hiddenPictureParts.length)]
  );

  useEffect(() => {
    setPartToFind(
      hiddenPictureParts[Math.floor(Math.random() * hiddenPictureParts.length)]
    );
  }, [hiddenPictureParts]);

  return (
    <div className="f-vertical find-card-wrapper">
      <h2>Find this card!</h2>
      <StaticCard classes={`empty-slot-logo reversed-${partToFind}`} />
    </div>
  );
};

export default FindCard;
