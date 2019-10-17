import React, { useState } from "react";
import Score from "../score/ScoreComponent";
import FindCard from "../findCard/FindCardComponent";
import PickupCards from "../pickupCards/PickupCardsComponent";
import LayField from "../layField/LayFieldComponent";

const Layout = () => {
  const [hiddenPictureParts, setHiddenPictureParts] = useState([0, 1, 2, 3, 4]);
  const [foundPictureParts, setFoundPictureParts] = useState([
    "x",
    "y",
    "z",
    "w",
    "p"
  ]);
  const [draggedPart, setDraggedPart] = useState(null);

  return (
    <div className="f-horizontal main-container">
      <div className="f-vertical left-container m-20">
        <div className="pickup-cards-container m-20 vertical-separator">
          <h2>Pickup Cards</h2>
          <PickupCards
            hiddenPictureParts={hiddenPictureParts}
            setDraggedPart={setDraggedPart}
          />
        </div>
        <div className="zoovu-logo-container m-20">
          <h2>Zoovu Logo</h2>
          <LayField
            draggedPart={draggedPart}
            hiddenPictureParts={hiddenPictureParts}
            setHiddenPictureParts={setHiddenPictureParts}
            setDraggedPart={setDraggedPart}
            foundPictureParts={foundPictureParts}
            setFoundPictureParts={setFoundPictureParts}
          />
        </div>
      </div>
      <div className="f-vertical right-container horizontal-separator m-20">
        <div className="score-container vertical-separator">
          <Score />
        </div>
        <div className="find-card-container f-vertical">
          <FindCard hiddenPictureParts={hiddenPictureParts}/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
