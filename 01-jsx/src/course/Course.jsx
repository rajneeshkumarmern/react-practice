import { useState } from "react";
import "./Course.css";

function Course() {

  const [showCourse, setShowCourse] = useState(false);

  const course = {
    courseId: "C-12",
    courseName: "React",
    price: 16000,
    duration: "50 hours",
    trainer: "Srinivas Dande"
  };

  const showCourseInfo = () => {
    console.log("Button is Clicked");
    setShowCourse(!showCourse);
  };

  return (
    <div className="mycourse">

      <button className="mybutton" onClick={showCourseInfo}>
        Course Details
      </button>

      {showCourse && (
        <div>
          <p>Cid : {course.courseId}</p>
          <p>Cname : {course.courseName}</p>
          <p>Price : {course.price}</p>
          <p>Duration : {course.duration}</p>
          <p>Trainer : {course.trainer}</p>
        </div>
      )}

    </div>
  );
}

export default Course;