import React, { useState } from "react";
import JobListing from "./JobListing";
import Pagination from "./Pagination";

const JobList = ({ jobs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const [filter, setFilter] = useState({ location: "", title: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.location.toLowerCase().includes(filter.location.toLowerCase()) &&
      job.title.toLowerCase().includes(filter.title.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <label>Filter by Location:</label>
        <input
          type="text"
          name="location"
          value={filter.location}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <label>Filter by Title:</label>
        <input
          type="text"
          name="title"
          value={filter.title}
          onChange={handleFilterChange}
        />
      </div>

      {currentJobs.map((job, index) => (
        <JobListing key={index} job={job} />
      ))}

      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={filteredJobs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default JobList;
