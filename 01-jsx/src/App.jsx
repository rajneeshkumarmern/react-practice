import CourseList from "./Course/CourseList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const mycourseList = [
    { cid: 101, cname: "Angular", trainer: "Srinivas", price: 15000, isOnline: true },
    { cid: 102, cname: "React JS", trainer: "Srinivas", price: 15000, isOnline: false },
    { cid: 103, cname: "Java FSD", trainer: "Srinivas", price: 55000, isOnline: false },
    { cid: 104, cname: "Spring Boot", trainer: "Srinivas", price: 25000, isOnline: true },
    { cid: 105, cname: "MicroServices", trainer: "Srinivas", price: 225000, isOnline: true }
  ];

  return (
    <div>

      <p className="text-center">Welcome to Java Learning Center</p>

      <ul className="nav justify-content-end">

        <li className="nav-item">
          <a className="nav-link active">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active">Courses</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active">Contact</a>
        </li>

      </ul>

      <br />

      <div className="container-fluid">
        <CourseList mycourses={mycourseList} />
      </div>

    </div>
  );
}

export default App;