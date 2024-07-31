import React from "react";

const TravelEntry = ({ entry }) => {
  const { destination, date, description, photo } = entry;

  return (
    <div className="travel-entry">
      <h3>{destination}</h3>
      <p>{new Date(date).toDateString()}</p>
      <p>{description}</p>
      {photo && <img src={URL.createObjectURL(photo)} alt={destination} />}
    </div>
  );
};

export default TravelEntry;
