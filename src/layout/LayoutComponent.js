import React, { useState, useEffect } from "react";
import Score from "../score/ScoreComponent";
import FindCard from "../findCard/FindCardComponent";
import PickupCards from "../pickupCards/PickupCardsComponent";
import LayField from "../layField/LayFieldComponent";
import FinishModal from "../finishModal/FinishModalComponent";
import { pickRandomElementFromArray } from "./layout";

const Layout = () => {
  const [playGame, setPlayGame] = useState(false);
  const [finishGame, setFinishGame] = useState(false);
  const [score, setScore] = useState(0);
  const [hiddenPictureParts, setHiddenPictureParts] = useState([0, 1, 2, 3, 4]);
  const [foundPictureParts, setFoundPictureParts] = useState([
    "x",
    "y",
    "z",
    "w",
    "p"
  ]);
  const [draggedPart, setDraggedPart] = useState(null);
  const [pickedPart, setPickedPart] = useState(null);
  const [partToFind, setPartToFind] = useState(pickRandomElementFromArray(hiddenPictureParts));

  useEffect(() => {
    if (playGame) {
      const interval = setInterval(() => setScore(score => score + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [score, playGame]);

  useEffect(() => {
    if (!hiddenPictureParts.length) {
      setPlayGame(false);
      setFinishGame(true);
    }
  }, [hiddenPictureParts]);

  useEffect(() => {
    if (pickedPart !== null && pickedPart !== partToFind)
      setScore(score => score + 10);
  }, [pickedPart]);

  useEffect(() => {
    setPartToFind(pickRandomElementFromArray(hiddenPictureParts));
  }, [hiddenPictureParts]);

  return (
    <div className="f-horizontal main-container">
      {finishGame ? <FinishModal score={score} /> : null}
      <div className="f-vertical left-container m-20">
        <div className="pickup-cards-container m-20 vertical-separator">
          <h2>Pickup Cards</h2>
          <PickupCards
            partToFind={partToFind}
            startGame={playGame}
            setStartGame={setPlayGame}
            setPickedPart={setPickedPart}
            hiddenPictureParts={hiddenPictureParts}
            setDraggedPart={setDraggedPart}
            pickedPart={pickedPart}
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
          <Score score={score} />
        </div>
        <div className="find-card-container f-vertical">
          <FindCard partToFind={partToFind} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
