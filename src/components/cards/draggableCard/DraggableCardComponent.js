import React, { useState, useEffect } from "react";
import classnames from "classnames";

const DraggableCard = ({ partId, classes, setDraggedPart, setPickedPart, startGame ,setStartGame, partToFind, pickedPart}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (pickedPart !== partId) setToggle(false)
  }, [pickedPart])

  const handleClick = () => {
    if(!startGame) setStartGame(!startGame)
    setPickedPart(partId)
    setToggle(!toggle)
  };

  const onDrag = (e, id) => {
    e.preventDefault();
    if(toggle) setDraggedPart(id);
  };

  return (
    <div
      className={classnames(classes, { [`reversed reversed-${partId}`]: toggle })}
      onClick={handleClick}
      draggable={toggle && partToFind === partId ? true : false}
      onDrag={event => onDrag(event, partId)}
    ></div>
  );
};

export default DraggableCard;
