import { useState, useEffect } from "react";
import Course from "./Course";

function CourseList({ mycourses }) {

  const [mycourseList, setMyCourseList] = useState([]);
  const [courseCount, setCourseCount] = useState(0);

  const showLowPriceCourses = () => {
    const coursesToDisplay = mycourses.filter(
      course => course.price <= 15000
    );

    setMyCourseList(coursesToDisplay);
    setCourseCount(coursesToDisplay.length);
  };

  const showOnlineCourses = () => {
    const coursesToDisplay = mycourses.filter(
      course => course.isOnline === true
    );

    setMyCourseList(coursesToDisplay);
    setCourseCount(coursesToDisplay.length);
  };

  const showAllCourses = () => {
    setMyCourseList(mycourses);
    setCourseCount(mycourses.length);
  };

  useEffect(() => {
    showAllCourses();
  }, []);

  return (
    <div className="container-fluid">

      <button
        onClick={showAllCourses}
        className="btn btn-success mybutton btn-lg"
      >
        All Courses
      </button>

      <button
        onClick={showLowPriceCourses}
        className="btn btn-success mybutton btn-lg"
      >
        Low Price Courses
      </button>

      <button
        onClick={showOnlineCourses}
        className="btn btn-success mybutton btn-lg"
      >
        Online Courses
      </button>

      <br /><br />

      <h3>Results : {courseCount}</h3>

      <br />

      {mycourseList.map(course => (
        <Course key={course.cid} course={course} />
      ))}

    </div>
  );
}

export default CourseList;