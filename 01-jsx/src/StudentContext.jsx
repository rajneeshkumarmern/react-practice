import React, { createContext } from "react";

// 1️⃣ Create Context
const StudentContext = createContext();

export const MyStudentProvider = ({ children }) => {

  // 2️⃣ State Data
  const studentData = {
    studentId: 101,
    studentName: "Dandes",
    email: "dandes@jlc.com",
    phone: 55555
  };

  // 3️⃣ Provide Data
  return (
    <StudentContext.Provider value={studentData}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;