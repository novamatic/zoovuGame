import React, {useState} from "react";
import classnames from 'classnames'

const StaticCard = ({
  partId,
  classes,
  slotNumber,
  draggedPart,
  hiddenPictureParts,
  setHiddenPictureParts,
  setDraggedPart,
  foundPictureParts,
  setFoundPictureParts
}) => {
  const [enter, setEnter] = useState(false)

  const onDrop = (e, slotNumber) => {
    e.preventDefault();
    if (slotNumber !== draggedPart) return;
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
      onDrop={event => onDrop(event, slotNumber)}
      onDragOver={event => onDragOver(event)}
      onDragEnter={() => setEnter(true)}
      onDragLeave={() => setEnter(false)}
      className={classnames(`${classes} reversed-${partId}`, {'on-drag-over': enter})}
    ></div>
  );
};

export default StaticCard;
