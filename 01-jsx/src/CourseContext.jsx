import React, { createContext } from "react";

export const CourseContext = createContext();

export const MyCourseProvider = ({ children }) => {

  const courseData = {
    courseId: "C-11",
    courseName: "Spring MicroServices",
    cost: 18000,
    trainer: "Srinivas Dande"
  };

  return (
    <CourseContext.Provider value={courseData}>
      {children}
    </CourseContext.Provider>
  );
};