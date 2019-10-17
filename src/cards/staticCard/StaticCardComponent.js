import React from "react";

const StaticCard = ({
  partId,
  classes,
  draggedPart,
  hiddenPictureParts,
  setHiddenPictureParts,
  setDraggedPart,
  foundPictureParts,
  setFoundPictureParts
}) => {
  const onDrop = e => {
    e.preventDefault();
    const newFoundPictureParts = [...foundPictureParts];
    newFoundPictureParts[draggedPart] = draggedPart;
    setFoundPictureParts(newFoundPictureParts);

    const newHiddenPictureParts = [...hiddenPictureParts].filter(
      partId => partId !== draggedPart
    );
    setHiddenPictureParts(newHiddenPictureParts);

    setDraggedPart(null);
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={event => onDrop(event)}
      onDragOver={event => onDragOver(event)}
      className={`${classes} reversed-${partId}`}
    ></div>
  );
};

export default StaticCard;
