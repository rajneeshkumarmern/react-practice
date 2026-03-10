import React, { createContext } from "react";

export const StudentContext = createContext();

export const MyStudentProvider = ({ children }) => {

  const studentData = {
    studentId: 101,
    studentName: "Dandes",
    email: "dandes@jlc.com",
    phone: 55555
  };

  return (
    <StudentContext.Provider value={studentData}>
      {children}
    </StudentContext.Provider>
  );
};