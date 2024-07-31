import React, { useState } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";

const Dashboard = () => {
  const [courses, setCourses] = useState([
    {
      name: "React Basics",
      description: "Learn the basics of React",
      duration: "10 hours",
      instructor: "John Doe",
    },
    {
      name: "Advanced React",
      description: "Learn advanced React concepts",
      duration: "20 hours",
      instructor: "Jane Doe",
    },
  ]);

  const [courseToEdit, setCourseToEdit] = useState(null);

  const addCourse = (course) => {
    setCourses([course, ...courses]);
  };

  const editCourse = (updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.name === courseToEdit.name ? updatedCourse : course
      )
    );
    setCourseToEdit(null);
  };

  const deleteCourse = (courseToDelete) => {
    setCourses(courses.filter((course) => course.name !== courseToDelete.name));
  };

  const startEditing = (course) => {
    setCourseToEdit(course);
  };

  const clearEdit = () => {
    setCourseToEdit(null);
  };

  return (
    <div>
      <h1>Course Management Dashboard</h1>
      <CourseForm
        addCourse={addCourse}
        editCourse={editCourse}
        courseToEdit={courseToEdit}
        clearEdit={clearEdit}
      />
      <CourseList
        courses={courses}
        editCourse={startEditing}
        deleteCourse={deleteCourse}
      />
    </div>
  );
};

export default Dashboard;
