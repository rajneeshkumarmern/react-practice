import React, { useState, useEffect } from "react";
import MyCourses from "./components/MyCourses";
import Hello from "./components/Hello";

const App = () => {

  const [companyName] = useState("CourseCube");
  const [courseFlag, setCourseFlag] = useState(true);

  useEffect(() => {
    console.log("[App] componentDidMount");

    return () => {
      console.log("[App] componentWillUnmount");
    };
  }, []);

  const showHideCourses = () => {
    setCourseFlag(!courseFlag);
  };

  return (
    <div className="container">

      <h1 className="text-center">
        Welcome to {companyName}!!!
      </h1>

      <br />

      <button
        className="btn btn-danger"
        onClick={showHideCourses}
      >
        Show Hide Courses
      </button>

      <br />
      <br />

      {courseFlag && (
        <MyCourses hello="Hello Guys" hai="Hai Guys" />
      )}

      <br />

      <table className="table bordered">
        <tbody>
          <tr>
            <td><Hello /></td>
            <td><Hello mytrainer="Dande" /></td>
            <td><Hello mytrainer="Srinivas Dande" mycolor="Blue" /></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default App;