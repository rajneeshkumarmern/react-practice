import React, { useState, useEffect } from "react";

function MyCourses() {

  const [trainerName] = useState("Srinivas Dande");
  const [trainerEmail, setTrainerEmail] = useState("sri@jlc.com");

  const allCourses = [
    { cid: 101, cname: "Angular 7", price: 15000, active: true },
    { cid: 102, cname: "React 16", price: 15000, active: true },
    { cid: 103, cname: "Java FSD", price: 35000, active: false },
    { cid: 104, cname: "MicroServices", price: 25000, active: true },
    { cid: 105, cname: "DevOps", price: 15000, active: false },
  ];

  const [mycourseList, setMycourseList] = useState(allCourses);

  const showActiveCourses = () => {
    console.log("showActiveCourses - called");

    const activeCourses = allCourses.filter(
      (course) => course.active === true
    );

    setTrainerEmail("srinivas@jlc.com");
    setMycourseList(activeCourses);
  };

  const showAllCourses = () => {
    console.log("showAllCourses - called");

    setTrainerEmail("sri@jlc.com");
    setMycourseList(allCourses);
  };

  useEffect(() => {
    showAllCourses();
  }, []);

  const courseListToDisplay = mycourseList.map((course) => (
    <tr key={course.cid}>
      <td>
        <h6>{course.cid}</h6>
      </td>
      <td>
        <h6>{course.cname}</h6>
      </td>
      <td>
        <h6>{course.price}</h6>
      </td>
      <td>
        <h6>{course.active.toString()}</h6>
      </td>
    </tr>
  ));

  return (
    <div className="container">

      <div className="container">

        <button
          onClick={showAllCourses}
          className="btn btn-success mybutton btn-lg"
        >
          All Courses
        </button>

        <button
          onClick={showActiveCourses}
          className="btn btn-success mybutton btn-lg"
        >
          Active Courses
        </button>

      </div>

      <br />
      <br />

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Is Active</th>
          </tr>
        </thead>

        <tbody>{courseListToDisplay}</tbody>

      </table>

      <h3>Trainer Name : {trainerName}</h3>
      <h3>Trainer Email : {trainerEmail}</h3>

    </div>
  );
}

export default MyCourses;