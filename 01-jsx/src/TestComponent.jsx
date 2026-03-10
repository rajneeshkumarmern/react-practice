import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";
import { CourseContext } from "./CourseContext";

const TestComponent = () => {

  const student = useContext(StudentContext);
  const course = useContext(CourseContext);

  return (
    <div className="container">

      <br />

      <h2 className="text-center">Student + Course Info</h2>

      <h3>Student ID : {student.studentId}</h3>
      <h3>Student Name : {student.studentName}</h3>
      <h3>Email : {student.email}</h3>
      <h3>Phone : {student.phone}</h3>

      <hr />

      <h3>Course Id : {course.courseId}</h3>
      <h3>Course Name : {course.courseName}</h3>
      <h3>Cost : {course.cost}</h3>
      <h3>Trainer : {course.trainer}</h3>

    </div>
  );
};

export default TestComponent;