import React from "react";

const Score = ({ score }) => {
  return (
    <h1>
      Score: {score} second{score > 1 ? "s" : ""}
    </h1>
  );
};

export default Score;
