import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./components/Courses";

const App = () => {

  const [courseFlag, setCourseFlag] = useState(true);

  // Runs on every render
  useEffect(() => {
    console.log("[App] - 1st useEffect");

    return () => {
      console.log("[App] - Cleanup 1st useEffect");
    };
  });

  // Runs only once (componentDidMount)
  useEffect(() => {
    console.log("[App] - 2nd useEffect (Mounted)");

    return () => {
      console.log("[App] - Cleanup 2nd useEffect");
    };
  }, []);

  // Another mount effect
  useEffect(() => {
    console.log("[App] - 3rd useEffect");

    return () => {
      console.log("[App] - Cleanup 3rd useEffect");
    };
  }, []);

  const hideShowCourses = () => {
    console.log("[App] hideShowCourses");
    setCourseFlag(!courseFlag);
  };

  return (
    <div className="container">

      <h1 className="text-center">Welcome to JLC!!!</h1>

      <br />

      <button
        className="btn btn-success"
        onClick={hideShowCourses}
      >
        Hide Show Courses
      </button>

      <br /><br /><br />

      {courseFlag && <Courses />}

    </div>
  );
};

export default App;