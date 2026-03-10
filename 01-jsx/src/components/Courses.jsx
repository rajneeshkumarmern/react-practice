import React, { useState, useEffect } from "react";

const Courses = () => {

  const [trainerName] = useState("Srinivas Dande");
  const [trainerEmail] = useState("sri@jlc.com");

  const [courseList, setCourseList] = useState([
    { cid: 101, cname: "Angular 7", price: 15000 },
    { cid: 102, cname: "React JS", price: 15000 },
    { cid: 103, cname: "Java Full Stack", price: 36000 },
    { cid: 104, cname: "Spring MicroServices", price: 22000 },
    { cid: 105, cname: "DevOps", price: 15000 }
  ]);

  // Runs every render
  useEffect(() => {
    console.log("[Courses] 1st useEffect");

    return () => {
      console.log("[Courses] cleanup 1st useEffect");
    };
  });

  // Runs once (componentDidMount)
  useEffect(() => {
    console.log("[Courses] 2nd useEffect");

    return () => {
      console.log("[Courses] cleanup 2nd useEffect");
    };
  }, []);

  // Runs when trainer data changes
  useEffect(() => {
    console.log("[Courses] 3rd useEffect");

    return () => {
      console.log("[Courses] cleanup 3rd useEffect");
    };
  }, [trainerName, trainerEmail]);

  const showAllCourses = () => {
    console.log("showAllCourses called");

    setCourseList([
      { cid: 101, cname: "Angular 7", price: 12000 },
      { cid: 102, cname: "React JS", price: 12000 },
      { cid: 104, cname: "Spring MicroServices", price: 15000 }
    ]);
  };

  return (
    <div className="container">

      <div style={{ float: "right" }}>
        <button
          className="btn btn-primary mybutton"
          onClick={showAllCourses}
        >
          Show All Courses
        </button>
      </div>

      <div className="container">

        <table className="table table-striped table-light table-bordered">
          <tbody>

            {courseList.map((course) => (
              <tr key={course.cid}>
                <td><h6>{course.cid}</h6></td>
                <td><h6>{course.cname}</h6></td>
                <td><h6>{course.price}</h6></td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

      <h2>Trainer Name : {trainerName}</h2>
      <h2>Trainer Email : {trainerEmail}</h2>

    </div>
  );
};

export default Courses;