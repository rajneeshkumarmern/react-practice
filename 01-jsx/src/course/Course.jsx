import { useState } from "react";
import "./Course.css";

function Course(props) {

  const [showCourse, setShowCourse] = useState(false);

  const showCourseInfo = () => {
    setShowCourse(!showCourse);
  };

  console.log("Course Component Rendered");

  return (
    <div className="mycourse">

      <button className="mybutton" onClick={showCourseInfo}>
        Course Details
      </button>

      {showCourse && (
        <div>
          <p>Cid : {props.mycid}</p>
          <p>Cname : {props.mycname}</p>
          <p>Price : {props.myprice}</p>
          <p>Duration : {props.myduration}</p>
          <p>Trainer : {props.mytrainer}</p>
        </div>
      )}

    </div>
  );
}

export default Course;