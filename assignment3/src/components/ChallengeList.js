import React from "react";
import ChallengeEntry from "./ChallengeEntry";

const ChallengeList = ({ challenges }) => {
  const ongoingChallenges = challenges.filter(
    (challenge) => new Date(challenge.endDate) >= new Date()
  );
  const completedChallenges = challenges.filter(
    (challenge) => new Date(challenge.endDate) < new Date()
  );

  return (
    <div>
      <h2>Ongoing Challenges</h2>
      {ongoingChallenges.map((challenge, index) => (
        <ChallengeEntry key={index} challenge={challenge} />
      ))}

      <h2>Completed Challenges</h2>
      {completedChallenges.map((challenge, index) => (
        <ChallengeEntry key={index} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengeList;
