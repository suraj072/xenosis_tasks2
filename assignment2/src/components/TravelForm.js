import React, { useState } from "react";

const TravelForm = ({ addEntry }) => {
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    setFormData({
      destination: "",
      date: "",
      description: "",
      photo: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
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
        <label>Photo:</label>
        <input type="file" onChange={handlePhotoChange} />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default TravelForm;
