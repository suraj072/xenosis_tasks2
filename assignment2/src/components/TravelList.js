import React from "react";
import TravelEntry from "./TravelEntry";

const TravelList = ({ entries }) => {
  return (
    <div>
      {entries.map((entry, index) => (
        <TravelEntry key={index} entry={entry} />
      ))}
    </div>
  );
};

export default TravelList;
