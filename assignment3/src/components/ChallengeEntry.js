import React from "react";

const ChallengeEntry = ({ challenge }) => {
  const { name, description, startDate, endDate, goal } = challenge;

  const calculateProgress = () => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDuration = end - start;
    const elapsed = now - start;

    return Math.min((elapsed / totalDuration) * 100, 100).toFixed(2);
  };

  const progress = calculateProgress();

  return (
    <div className="challenge-entry">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Start Date: {new Date(startDate).toDateString()}</p>
      <p>End Date: {new Date(endDate).toDateString()}</p>
      <p>Goal: {goal}</p>
      <p>Progress: {progress}%</p>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ChallengeEntry;
