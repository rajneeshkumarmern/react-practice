import React, { useEffect } from "react";

const Hai = ({ mymessage }) => {

  useEffect(() => {
    console.log("[Hai] mounted");

    return () => {
      console.log("[Hai] unmounted");
    };
  }, []);

  return (
    <div className="container">

      <br />

      <h3>{mymessage}</h3>
      <h3>{mymessage}</h3>

      <br />

    </div>
  );
};

export default Hai;