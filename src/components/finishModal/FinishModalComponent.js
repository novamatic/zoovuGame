import React, { useEffect } from "react";

const FinishModal = ({ score }) => {
  useEffect(() => {
    setTimeout(() => window.location.reload(), 10000);
  }, []);

  return (
    <>
      <div className="modal__mask"></div>
      <div className="modal">
        <p className="modal__title">Congrats, your score is {score}</p>
        <p className="modal__subtitle">
          Game will refresh automatically after 10s
        </p>
      </div>
    </>
  );
};

export default FinishModal;
