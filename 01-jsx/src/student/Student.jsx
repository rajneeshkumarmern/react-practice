import Course from "../course/Course";
import "./Student.css";

function Student(){
  const Student={
    sid:101,
    sname:"John",
    course:"MCA",
    email:"john@example.com",
    phone:1234567890,
    city:"New York"
  }
  console.log("Student component is rendering");
  
  return(
    <div className="mystudent">
        <p>Sid:{Student.sid}</p>
        <p>Sname:{Student.sname}</p>
        <p>course:{Student.course}</p>
        <p>Email:{Student.email}</p>
        <p>Phone:{Student.phone}</p>
        <p>City:{Student.city}</p>
        <br/>
        <Course/>
    </div>
  );
}