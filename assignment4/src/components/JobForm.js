import React, { useState } from "react";

const JobForm = ({ addJob }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(formData);
    setFormData({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Job Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Salary:</label>
        <input
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Job Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobForm;
