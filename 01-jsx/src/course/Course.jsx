import { useState } from "react";

function Course({ course }) {

  const [showCourseInfo, setShowCourseInfo] = useState(false);

  const toggleCourseInfo = () => {
    setShowCourseInfo(!showCourseInfo);
  };

  return (
    <div className="container-fluid">

      <div className="card">

        <div className="card-header">

          <h5>
            {course.cname} Training (Code : {course.cid})

            <button
              onClick={toggleCourseInfo}
              className="btn btn-info"
              style={{ float: "right" }}
            >
              More Info
            </button>

          </h5>

        </div>

        {showCourseInfo && (

          <div className="card-body">

            <h5 className="card-title">
              Trainer : {course.trainer}
            </h5>

            <h5 className="card-title">
              Price : {course.price}
            </h5>

            <h5 className="card-title">
              Training Type : {course.isOnline ? "Online" : "Classroom"}
            </h5>

          </div>

        )}

      </div>

      <br />

    </div>
  );
}

export default Course;