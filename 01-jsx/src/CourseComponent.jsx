import React, { useContext } from "react";
import { CourseContext } from "./CourseContext";

const CourseComponent = () => {

  const { courseId, courseName, cost, trainer } =
    useContext(CourseContext);

  return (
    <div className="container">

      <br />

      <h2 className="text-center">Course Info</h2>

      <h3>Course Id : {courseId}</h3>
      <h3>Course Name : {courseName}</h3>
      <h3>Cost : {cost}</h3>
      <h3>Trainer : {trainer}</h3>

    </div>
  );
};

export default CourseComponent;