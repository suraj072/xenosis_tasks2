import React, { useState } from "react";

const ChallengeForm = ({ addChallenge }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    goal: "",
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
    addChallenge(formData);
    setFormData({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      goal: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Challenge Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Goal:</label>
        <input
          type="text"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Challenge</button>
    </form>
  );
};

export default ChallengeForm;
