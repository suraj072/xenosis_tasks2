import React from "react";
import Course from "./Course";

const CourseList = ({ courses, editCourse, deleteCourse }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <Course
          key={index}
          course={course}
          editCourse={editCourse}
          deleteCourse={deleteCourse}
        />
      ))}
    </div>
  );
};

export default CourseList;
