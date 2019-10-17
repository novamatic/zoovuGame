import React, { useState, useEffect } from "react";

const Score = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setScore(score => score + 1), 1000);
    return () => clearInterval(interval);
  }, [score]);

  return (
    <h1>
      Score: {score} second{score > 1 ? "s" : ""}
    </h1>
  );
};

export default Score;
