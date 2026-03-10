import React, { useContext } from "react";
import {
  UPDATE_CNAME,
  UPDATE_PRICE,
  UPDATE_DURATION,
  UPDATE_TRAINER
} from "./courseTypes";

import { CourseContext } from "./CourseContext";

const CourseComponent = () => {

  const { courseId, courseName, price, duration, trainer, dispatch } =
    useContext(CourseContext);

  return (

    <div className="container">

      <br />

      <h3 className="text-center">Course Info</h3>

      <table className="table">

        <tbody>

          <tr>
            <td><h4>Course Id : {courseId}</h4></td>
            <td></td>
          </tr>

          <tr>
            <td><h4>Course Name : {courseName}</h4></td>
            <td>
              <button
                className="btn btn-success"
                onClick={() =>
                  dispatch({
                    type: UPDATE_CNAME,
                    payload: "Master React 16"
                  })
                }
              >
                Update Course Name
              </button>
            </td>
          </tr>

          <tr>
            <td><h4>Price : {price}</h4></td>
            <td>
              <button
                className="btn btn-success"
                onClick={() =>
                  dispatch({
                    type: UPDATE_PRICE,
                    payload: 13000
                  })
                }
              >
                Update Price
              </button>
            </td>
          </tr>

          <tr>
            <td><h4>Duration : {duration}</h4></td>
            <td>
              <button
                className="btn btn-success"
                onClick={() =>
                  dispatch({
                    type: UPDATE_DURATION,
                    payload: "75 Hrs"
                  })
                }
              >
                Update Duration
              </button>
            </td>
          </tr>

          <tr>
            <td><h4>Trainer : {trainer}</h4></td>
            <td>
              <button
                className="btn btn-success"
                onClick={() =>
                  dispatch({
                    type: UPDATE_TRAINER,
                    payload: "Srinivas Dande"
                  })
                }
              >
                Update Trainer
              </button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default CourseComponent;