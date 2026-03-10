import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { MyStudentProvider } from "./StudentContext";
import { MyCourseProvider } from "./CourseContext";

import StudentComponent from "./StudentComponent";
import CourseComponent from "./CourseComponent";
import TestComponent from "./TestComponent";

const App = () => {

  return (
    <MyStudentProvider>

      <MyCourseProvider>

        <div className="container">

          <StudentComponent />

          <CourseComponent />

          <hr />

          <TestComponent />

        </div>

      </MyCourseProvider>

    </MyStudentProvider>
  );
};

export default App;