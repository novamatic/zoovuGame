import React from "react";
import StaticCard from "../cards/staticCard/StaticCardComponent";

const LayField = ({
  draggedPart,
  hiddenPictureParts,
  setHiddenPictureParts,
  setDraggedPart,
  foundPictureParts,
  setFoundPictureParts
}) => {
  return (
    <div className="f-horizontal f-justify-content">
      {foundPictureParts.map((partId, index) => (
        <StaticCard
          key={partId}
          partId={partId}
          slotNumber={index}
          classes="empty-slot-logo"
          draggedPart={draggedPart}
          hiddenPictureParts={hiddenPictureParts}
          setHiddenPictureParts={setHiddenPictureParts}
          setDraggedPart={setDraggedPart}
          foundPictureParts={foundPictureParts}
          setFoundPictureParts={setFoundPictureParts}
        />
      ))}
    </div>
  );
};

export default LayField;
