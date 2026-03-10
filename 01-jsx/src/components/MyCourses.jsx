import React, { useState, useEffect } from "react";

const MyCourses = () => {

  const [mycourseList] = useState([
    { cid: 101, cname: "Angular 7", price: 15000 },
    { cid: 102, cname: "React 16", price: 15000 },
    { cid: 103, cname: "Java FSD", price: 35000 },
    { cid: 104, cname: "MicroServices", price: 25000 },
    { cid: 105, cname: "DevOps", price: 15000 },
  ]);

  useEffect(() => {
    console.log("[MyCourses] mounted");

    return () => {
      console.log("[MyCourses] unmounted");
    };
  }, []);

  return (
    <div className="container">

      <br />

      <table className="table">
        <tbody>
          {mycourseList.map((course) => (
            <tr key={course.cid}>
              <td><h6>{course.cid}</h6></td>
              <td><h6>{course.cname}</h6></td>
              <td><h6>{course.price}</h6></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default MyCourses;