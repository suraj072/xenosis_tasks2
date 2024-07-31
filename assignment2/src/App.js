import React, { useState, useEffect } from "react";
import TravelForm from "./components/TravelForm";
import TravelList from "./components/TravelList";
import "./App.css";

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem("travelEntries")) || [];
    setEntries(storedEntries);
  }, []);

  const addEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    localStorage.setItem("travelEntries", JSON.stringify(newEntries));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Journal</h1>
      </header>
      <TravelForm addEntry={addEntry} />
      <TravelList entries={entries} />
    </div>
  );
};

export default App;
