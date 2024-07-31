import React, { useState, useEffect } from "react";
import ChallengeForm from "./components/ChallengeForm";
import ChallengeList from "./components/ChallengeList";
import "./App.css";

const App = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const storedChallenges =
      JSON.parse(localStorage.getItem("fitnessChallenges")) || [];
    setChallenges(storedChallenges);
  }, []);

  const addChallenge = (challenge) => {
    const newChallenges = [challenge, ...challenges];
    setChallenges(newChallenges);
    localStorage.setItem("fitnessChallenges", JSON.stringify(newChallenges));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Challenge Tracker</h1>
      </header>
      <ChallengeForm addChallenge={addChallenge} />
      <ChallengeList challenges={challenges} />
    </div>
  );
};

export default App;
