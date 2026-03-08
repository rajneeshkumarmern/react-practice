import { useState } from "react";
import Course from "../course/Course";
import "./Student.css";

function Student() {
const[showStudent,setShowStudent] = useState(false);

  const student = {
    sid: 101,
    sname: "Srinivas",
    email: "sri@jlc",
    phone: 12345,
    city: "Blore",
    course: {
      courseId: "C-12",
      courseName: "React JS",
      price: 16000,
      duration: "50 hours",
      trainer: "Srinivas Dande"
    }
  };
  const showStudentInfo = () => {
  setShowStudent(!showStudent);
};

  console.log("Student Component Rendered");

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

      <Course
        mycid={student.course.courseId}
        mycname={student.course.courseName}
        myprice={student.course.price}
        myduration={student.course.duration}
        mytrainer={student.course.trainer}
      />

    </div>
  )
}
</div>
    );
}

export default Student;