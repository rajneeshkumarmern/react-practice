import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { MyCourseProvider } from "./CourseContext";
import CourseComponent from "./CourseComponent";

const App = () => {

  return (
    <MyCourseProvider>

      <div className="container">
        <CourseComponent />
      </div>

    </MyCourseProvider>
  );
};

export default App;