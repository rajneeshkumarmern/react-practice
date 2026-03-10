import React, { useState } from "react";
import Hello from "./Hello/Hello.jsx";

const App = () => {

  const [companyName] = useState("Java Learning Center");

  console.log("[App] - render()");
  console.log("[App] - companyName:", companyName);

  return (
    <div className="container">

      <h1 className="text-center">
        Welcome to JLC!!!
      </h1>

      <br />

      <Hello />

      <Hello mytrainer="Dande" />

      <Hello mytrainer="Srinivas" mycolor="Pink" />

    </div>
  );
};

export default App;