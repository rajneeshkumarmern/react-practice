import React, { useContext } from "react";
import StudentContext from "./StudentContext";

const StudentComponent = () => {

  const mystudentData = useContext(StudentContext);

  return (
    <div className="container">

      <br />

      <b>
        <u>
          <h2 className="text-center">Student Info</h2>
        </u>
      </b>

      <br />

      <div>

        <h3>Student ID : {mystudentData.studentId}</h3>

        <h3>Student Name : {mystudentData.studentName}</h3>

        <h3>Email Id : {mystudentData.email}</h3>

        <h3>Phone No : {mystudentData.phone}</h3>

      </div>

    </div>
  );
};

export default StudentComponent;