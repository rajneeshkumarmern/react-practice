import { useState } from "react";
import "./App.css";

function App() {

  const [state] = useState({
    sid: 105,
    sname: "hello",
    email: "hello@jlc",
    dob: new Date().toString(),
    isActive: false,

    mycourse: {
      courseId: "C-123",
      courseName: "React",
      price: 25000,
      trainer: "Srinivas Dande",
      isOnline: true
    },

    mycourseNames: [
      "Angular",
      "React",
      "MongoDB",
      "NodeJS",
      "ExpressJS"
    ],

    mycourseList: [
      { courseId: "C-101", courseName: "React", price: 15000, trainer: "Srinivas" },
      { courseId: "C-102", courseName: "Angular", price: 15000, trainer: "Srinivas" },
      { courseId: "C-103", courseName: "NodeJS", price: 15000, trainer: "Srinivas" },
      { courseId: "C-104", courseName: "MongoDB", price: 15000, trainer: "Srinivas" },
      { courseId: "C-105", courseName: "ExpressJS", price: 15000, trainer: "Srinivas" }
    ]
  });

  const showMoreInfo = (mycid) => {
    console.log("Course Id :", mycid);
  };

  const mycourseNamesDisplay = state.mycourseNames.map((courseName, index) => (
    <li key={index}>{courseName}</li>
  ));

  const mycourseListDisplay = state.mycourseList.map((course) => (
    <tr key={course.courseId}>
      <td>{course.courseId}</td>
      <td>{course.courseName}</td>
      <td>{course.price}</td>
      <td>{course.trainer}</td>
      <td>
        <button
          className="mybutton"
          onClick={() => showMoreInfo(course.courseId)}
        >
          More Info
        </button>
      </td>
    </tr>
  ));

  console.log("I am App Component");

  return (
    <div>

      <div className="myheader">
        <p>Welcome to Java Learning Center</p>
      </div>

      <div className="mydata">
        <h3><u>1. Simple Type of Properties</u></h3>

        <p>Sid : {state.sid}</p>
        <p>Sname : {state.sname}</p>
        <p>Email : {state.email}</p>
        <p>Dob : {state.dob}</p>
        <p>Active : {state.isActive ? "Yes" : "No"}</p>
      </div>

      <div className="mydata">
        <h3><u>2. Object Type Properties</u></h3>

        <p>Course Id : {state.mycourse.courseId}</p>
        <p>Course Name : {state.mycourse.courseName}</p>
        <p>Price : {state.mycourse.price}</p>
        <p>Trainer : {state.mycourse.trainer}</p>
        <p>Online : {state.mycourse.isOnline ? "Yes" : "No"}</p>
      </div>

      <div className="mydata">
        <h3><u>3. Array of Simple Types</u></h3>

        <ul>{mycourseNamesDisplay}</ul>
      </div>

      <div className="mydata">
        <h3><u>4. Array of Object Types</u></h3>

        <table>
          <thead>
            <tr>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Trainer</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {mycourseListDisplay}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default App;