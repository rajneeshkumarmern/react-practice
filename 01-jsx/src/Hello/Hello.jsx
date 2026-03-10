import React, { useState, useEffect } from "react";

const Hello = ({
  mytrainer = "Srinivas Dande",
  mycolor = "Red"
}) => {

  const [message, setMessage] = useState("Ok Guys");

  useEffect(() => {
    console.log("[Hello] - component mounted/updated");

    setMessage("Updated Message here");

  }, [mytrainer, mycolor]);

  console.log("[Hello] - render");

  return (
    <div className="container">

      <h3 className="text-center">
        I am Hello Component!!!
      </h3>

      <h4>My Trainer : {mytrainer}</h4>

      <h4 style={{ color: mycolor }}>
        My Color : {mycolor}
      </h4>

      <h5>{message}</h5>

      <br />

    </div>
  );
};

export default Hello;