import React, { useState, useEffect } from "react";
import DraggableCard from "../../cards/draggableCard/DraggableCardComponent";
import _shuffle from "lodash/shuffle";

const PickupCards = ({
                       pickedPart,
  hiddenPictureParts,
  setDraggedPart,
  setPickedPart,
  startGame,
  setStartGame,
  partToFind
}) => {
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
          partToFind={partToFind}
          startGame={startGame}
          setStartGame={setStartGame}
          setPickedPart={setPickedPart}
          key={partId}
          partId={partId}
          classes="empty-slot draggable-card-image"
          setDraggedPart={setDraggedPart}
          pickedPart={pickedPart}
        />
      ))}
    </div>
  );
};

export default PickupCards;
