import React, { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobs(storedJobs);
  }, []);

  const addJob = (job) => {
    const newJobs = [job, ...jobs];
    setJobs(newJobs);
    localStorage.setItem("jobListings", JSON.stringify(newJobs));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Board</h1>
      </header>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
