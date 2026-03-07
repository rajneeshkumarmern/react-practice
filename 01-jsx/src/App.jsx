import Student from "./student/Student";
import "./App.css";

function App() {

  const myheader = "Welcome to Java Learning Center";

  console.log("I am App Component");

  return (
    <div className="myheader">
      <p>{myheader}</p>

      <br />

      <Student />
    </div>
  );
}

export default App;