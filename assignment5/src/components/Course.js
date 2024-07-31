import React from "react";

const Course = ({ course, editCourse, deleteCourse }) => {
  const { name, description, duration, instructor } = course;

  return (
    <div className="course">
      <h3>{name}</h3>
      <p>Description: {description}</p>
      <p>Duration: {duration}</p>
      <p>Instructor: {instructor}</p>
      <button onClick={() => editCourse(course)}>Edit</button>
      <button onClick={() => deleteCourse(course)}>Delete</button>
    </div>
  );
};

export default Course;
