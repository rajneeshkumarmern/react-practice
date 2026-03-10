import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./DashBoard/DashBoard";

function App() {
  return (
    <div className="container-fluid">

      <h1 className="text-center">
        Welcome to CourseCube !!!
      </h1>

      <DashBoard />

    </div>
  );
}

export default App;