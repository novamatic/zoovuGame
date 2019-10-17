import React, { useState } from "react";
import classnames from "classnames";

const DraggableCard = ({ partId, classes, setDraggedPart }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const onDrag = (e, id) => {
    e.preventDefault();
    setDraggedPart(id);
  };

  return (
    <div
      className={classnames(classes, { [`reversed reversed-${partId}`]: toggle })}
      onClick={handleToggle}
      draggable={toggle ? 'true' : 'false'}
      onDrag={event => onDrag(event, partId)}
    ></div>
  );
};

export default DraggableCard;
