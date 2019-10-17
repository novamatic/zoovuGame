import React, { useState, useEffect } from "react";
import DraggableCard from "../cards/draggableCard/DraggableCardComponent";
import _shuffle from "lodash/shuffle";

const PickupCards = ({ hiddenPictureParts, setDraggedPart }) => {
  const [shuffledParts, setShuffledParts] = useState([
    ..._shuffle(hiddenPictureParts)
  ]);

  useEffect(() => {
    const newShuffledParts = [...shuffledParts].filter(shuffledPart =>
      hiddenPictureParts.includes(shuffledPart)
    );
    setShuffledParts(newShuffledParts);
  }, [hiddenPictureParts]);

  return (
    <div className="f-horizontal pickup-cards-wrapper">
      {shuffledParts.map(partId => (
        <DraggableCard
          key={partId}
          partId={partId}
          classes="empty-slot draggable-card-image"
          setDraggedPart={setDraggedPart}
        />
      ))}
    </div>
  );
};

export default PickupCards;
