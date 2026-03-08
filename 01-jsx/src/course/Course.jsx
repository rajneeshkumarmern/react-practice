import { useState } from "react";
import "./Course.css";

function Course({ mycourse }) {

  const [showCourse, setShowCourse] = useState(false);

  const showCourseInfo = () => {
    setShowCourse(!showCourse);
  };

  console.log("Course Component Rendered");

  return (
    <div className="mycourse">

      <button className="mybutton" onClick={showCourseInfo}>
        Course Info
      </button>

      {showCourse && (
        <div>
          <p>Course Id : {mycourse.courseId}</p>
          <p>Course Name : {mycourse.courseName}</p>
          <p>Price : {mycourse.price}</p>
          <p>Duration : {mycourse.duration}</p>
          <p>Trainer : {mycourse.trainer}</p>
        </div>
      )}

    </div>
  );
}

export default Course;