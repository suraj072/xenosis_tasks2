import React from "react";

const JobListing = ({ job }) => {
  const { title, company, location, salary, description } = job;

  return (
    <div className="job-listing">
      <h3>{title}</h3>
      <p>Company: {company}</p>
      <p>Location: {location}</p>
      <p>Salary: {salary}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default JobListing;
