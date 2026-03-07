import { useState } from "react";
import Course from "../course/Course";
import "./Student.css";

function Student() {

  const [showStudent, setShowStudent] = useState(false);

  const student = {
    sid: 105,
    sname: "Srinivas",
    email: "sri@jlc",
    phone: 12345,
    city: "Blore"
  };

  const showStudentInfo = () => {
    console.log("Button is Clicked");
    setShowStudent(!showStudent);
  };

  return (
    <div className="mystudent">

      <button className="mybutton" onClick={showStudentInfo}>
        Student Details
      </button>

      {showStudent && (
        <div>
          <p>Sid : {student.sid}</p>
          <p>Sname : {student.sname}</p>
          <p>Email : {student.email}</p>
          <p>Phone : {student.phone}</p>
          <p>City : {student.city}</p>

          <Course />
        </div>
      )}

    </div>
  );
}

export default Student;