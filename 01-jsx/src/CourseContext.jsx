import React, { createContext, useReducer } from "react";
import {
  UPDATE_CNAME,
  UPDATE_PRICE,
  UPDATE_DURATION,
  UPDATE_TRAINER
} from "./courseTypes";

export const CourseContext = createContext();

const myreducer = (state, action) => {

  console.log("[courseContext]", action.type, action.payload);

  switch (action.type) {

    case UPDATE_CNAME:
      return { ...state, courseName: action.payload };

    case UPDATE_PRICE:
      return { ...state, price: action.payload };

    case UPDATE_DURATION:
      return { ...state, duration: action.payload };

    case UPDATE_TRAINER:
      return { ...state, trainer: action.payload };

    default:
      return state;
  }
};

const initialState = {
  courseId: "C-101",
  courseName: "Master React",
  price: 10000,
  duration: "50 Hrs",
  trainer: "SD"
};

export const MyCourseProvider = ({ children }) => {

  const [state, dispatch] = useReducer(myreducer, initialState);

  return (
    <CourseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
};