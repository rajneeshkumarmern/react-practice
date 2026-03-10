import { useState } from "react";
import "./App.css";

function App() {

  const [mycoursesToDisplay, setMyCoursesToDisplay] = useState(null);

  const mystudentsData = [
    {
      studentId: 5001,
      stuentName: "Sri",
      emailId: "Sri@jlc.com",
      phones: { office: 1111, home: 2222 },
      address: { city: "Blore", state: "KA" },
      mycourses: [
        { cid: 101, cname: "React", price: 15000, trainer: "Srinivas" },
        { cid: 102, cname: "Angular", price: 15000, trainer: "Srinivas" },
        { cid: 103, cname: "Spring", price: 15000, trainer: "Srinivas" }
      ]
    },
    {
      studentId: 5002,
      stuentName: "Vas",
      emailId: "vas@jlc.com",
      phones: { office: 1111, home: 2222 },
      address: { city: "Blore", state: "KA" },
      mycourses: [
        { cid: 201, cname: "React", price: 15000, trainer: "Srinivas" },
        { cid: 202, cname: "Angular", price: 15000, trainer: "Srinivas" },
        { cid: 203, cname: "Spring", price: 15000, trainer: "Srinivas" }
      ]
    },
    {
      studentId: 5003,
      stuentName: "SD",
      emailId: "sd@jlc.com",
      phones: { office: 1111, home: 2222 },
      address: { city: "Blore", state: "KA" },
      mycourses: [
        { cid: 301, cname: "React", price: 15000, trainer: "Srinivas" },
        { cid: 302, cname: "Angular", price: 15000, trainer: "Srinivas" },
        { cid: 303, cname: "Spring", price: 15000, trainer: "Srinivas" }
      ]
    }
  ];

  const showCourseData = (mystudent) => {

    const courseRows = mystudent.mycourses.map((course) => (
      <tr key={course.cid}>
        <td>{course.cid}</td>
        <td>{course.cname}</td>
        <td>{course.price}</td>
        <td>{course.trainer}</td>
      </tr>
    ));

    const displayCourses = (
      <div>
        <h3>Course Details of Student : {mystudent.studentId}</h3>

        <table>
          <thead>
            <tr>
              <th>CID</th>
              <th>CName</th>
              <th>Price</th>
              <th>Trainer</th>
            </tr>
          </thead>

          <tbody>
            {courseRows}
          </tbody>
        </table>
      </div>
    );

    setMyCoursesToDisplay(displayCourses);
  };

  const mystudentsToDisplay = mystudentsData.map((student) => (

    <tr key={student.studentId}>
      <td>{student.studentId}</td>
      <td>{student.stuentName}</td>
      <td>{student.emailId}</td>
      <td>{student.phones.office}</td>
      <td>{student.phones.home}</td>
      <td>{student.address.city}</td>
      <td>{student.address.state}</td>

      <td>
        <button
          className="mybutton"
          onClick={() => showCourseData(student)}
        >
          Course Data
        </button>
      </td>

    </tr>

  ));

  return (

    <div>

      <div className="myheader">
        <p>Welcome to Java Learning Center</p>
      </div>

      <div className="mydata">

        <table>

          <thead>
            <tr>
              <th>SID</th>
              <th>SName</th>
              <th>Email</th>
              <th>Office Phone</th>
              <th>Home Phone</th>
              <th>City</th>
              <th>State</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {mystudentsToDisplay}
          </tbody>

        </table>

      </div>

      <br />

      <div className="mydata">
        {mycoursesToDisplay}
      </div>

    </div>

  );

}

export default App;