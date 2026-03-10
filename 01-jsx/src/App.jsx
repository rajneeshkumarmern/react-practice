import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";

function App() {

  const [name] = useState("Srinivas Dande");
  const [styleFlag, setStyleFlag] = useState(false);
  const [classFlag, setClassFlag] = useState(false);

  const changeStyles = () => {
    setStyleFlag(!styleFlag);
  };

  const changeClasses = () => {
    setClassFlag(!classFlag);
  };

  // Dynamic Styles
  const mystyles = styleFlag
    ? {
        color: "blue",
        fontSize: "25px",
        border: "5px solid red",
        borderRadius: "15px",
        padding: "10px",
      }
    : {
        color: "red",
        fontSize: "25px",
        border: "2px solid blue",
        borderRadius: "5px",
        padding: "10px",
      };

  return (
    <div className="container">

      <h2 className="text-center">
        Welcome to Java Learning Center!!!
      </h2>

      <br />

      <p>1. Applying Styles - Static Way</p>

      <div
        style={{
          color: "red",
          fontSize: "25px",
          border: "2px solid blue",
          borderRadius: "5px",
          padding: "10px",
          fontFamily: "Cambria",
        }}
      >
        You are learning React from {name} !!!
      </div>

      <br />

      <p>2. Applying Styles - Dynamic Way</p>

      <div style={mystyles}>
        You are learning React from {name} !!!
      </div>

      <br />

      <button
        onClick={changeStyles}
        className="btn btn-success"
      >
        Change Styles
      </button>

      <br />
      <br />

      <p>3. Applying Classes - Static Way</p>

      <div className="myclass1 myclass2 myblue">
        You are learning React from {name} !!!
      </div>

      <br />
      <br />

      <p>4. Applying Classes - Dynamic Way</p>

      <div
        className={classNames("myclass1", "myclass2", {
          myred: !classFlag,
          myblue: classFlag,
        })}
      >
        You are learning React from {name} !!!
      </div>

      <br />

      <button
        onClick={changeClasses}
        className="btn btn-success"
      >
        Change Classes
      </button>

      <br />

    </div>
  );
}

export default App;