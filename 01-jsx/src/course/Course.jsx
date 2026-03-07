import "./Course.css";

function Course() {

  const course = {
    courseId: "C-12",
    courseName: "React",
    price: 15000,
    duration: "50 hours",
    trainer: "Srinivas Dande"
  };

  console.log("I am Course Component");

  return (
    <div className="mycourse">
      <p>Cid : {course.courseId}</p>
      <p>Cname : {course.courseName}</p>
      <p>Price : {course.price}</p>
      <p>Duration : {course.duration}</p>
      <p>Trainer : {course.trainer}</p>
    </div>
  );
}

export default Course;