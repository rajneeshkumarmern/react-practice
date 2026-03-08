import Course from "../course/Course";
import "./Student.css";

function Student({ mystudent }) {

  console.log("Student Component Rendered");

  return (
    <div className="mystudent">

      <p>Sid : {mystudent.sid}</p>
      <p>Sname : {mystudent.sname}</p>
      <p>Email : {mystudent.email}</p>
      <p>Phone : {mystudent.phone}</p>
      <p>City : {mystudent.city}</p>

      <Course mycourse={mystudent.course} />

    </div>
  );
}

export default Student;