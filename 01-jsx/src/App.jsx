import "./App.css";
import Student from "./student/Student";

function App() {

  const myheader = "Welcome to Java Learning Center";

  const student = {
    sid: 105,
    sname: "Srinivas",
    email: "sri@jlc",
    phone: 55555,
    city: "Blore",
    course: {
      courseId: "C-12",
      courseName: "React",
      price: 15000,
      duration: "50 hours",
      trainer: "Srinivas Dande"
    }
  };

  console.log("I am App Component");

  return (
    <div className="myheader">

      <p>{myheader}</p>

      <br />

      <Student mystudent={student} />

    </div>
  );
}

export default App;