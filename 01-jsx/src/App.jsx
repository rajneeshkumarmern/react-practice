import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { MyStudentProvider } from "./StudentContext";
import StudentComponent from "./StudentComponent";

const App = () => {

  return (
    <MyStudentProvider>

      <div className="container">
        <StudentComponent />
      </div>

    </MyStudentProvider>
  );
};

export default App;