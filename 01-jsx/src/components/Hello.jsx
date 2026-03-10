import React, { useState, useEffect } from "react";
import Hai from "./Hai";

const Hello = ({
  mytrainer = "Srinivas",
  mycolor = "Red"
}) => {

  const [message, setMessage] = useState("OK Guys");

  useEffect(() => {
    console.log("[Hello] mounted");

    return () => {
      console.log("[Hello] unmounted");
    };
  }, []);

  const changeHelloMessage = () => {
    setMessage("Hello Guys, How are you!!!");
  };

  return (
    <div className="container">

      <button
        className="btn btn-primary"
        onClick={changeHelloMessage}
      >
        Show and Hide Hello
      </button>

      <br />

      <h3>{message}</h3>

      <h3>MyTrainer : {mytrainer}</h3>

      <h3 style={{ color: mycolor }}>
        MyColor : {mycolor}
      </h3>

      <br />

      <Hai mymessage={message} />

    </div>
  );
};

export default Hello;