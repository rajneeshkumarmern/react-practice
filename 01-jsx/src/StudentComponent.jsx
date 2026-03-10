import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";

const StudentComponent = () => {

  const { studentId, studentName, email, phone } =
    useContext(StudentContext);

  return (
    <div className="container">

      <br />

      <h2 className="text-center">Student Info</h2>

      <h3>Student ID : {studentId}</h3>
      <h3>Student Name : {studentName}</h3>
      <h3>Email : {email}</h3>
      <h3>Phone : {phone}</h3>

    </div>
  );
};

export default StudentComponent;