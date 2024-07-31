import React, { useState, useEffect } from "react";

const CourseForm = ({ addCourse, editCourse, courseToEdit, clearEdit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    instructor: "",
  });

  useEffect(() => {
    if (courseToEdit) {
      setFormData(courseToEdit);
    } else {
      setFormData({
        name: "",
        description: "",
        duration: "",
        instructor: "",
      });
    }
  }, [courseToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseToEdit) {
      editCourse(formData);
      clearEdit();
    } else {
      addCourse(formData);
    }
    setFormData({
      name: "",
      description: "",
      duration: "",
      instructor: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Course Name:</label>
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
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Instructor:</label>
        <input
          type="text"
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">
        {courseToEdit ? "Edit Course" : "Add Course"}
      </button>
    </form>
  );
};

export default CourseForm;
