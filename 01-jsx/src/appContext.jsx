import React, { createContext, useReducer } from "react";

const MyContext = createContext();

const myreducer = (state, action) => {
  console.log("[appContext] reducer:", action.type);

  switch (action.type) {

    case "DELETE_LEAD":
      return {
        ...state,
        myleadsList: state.myleadsList.filter(
          (lead) => lead.leadId !== action.payload
        )
      };

    default:
      return state;
  }
};

const initialState = {
  myleadsList: [
    { leadId: 101, name: "Sri", email: "sri@jlc", phone: 12345, course: "Java FSD" },
    { leadId: 102, name: "vas", email: "vas@jlc", phone: 55555, course: "Angular" },
    { leadId: 103, name: "sd", email: "sd@jlc", phone: 99999, course: "React" },
    { leadId: 104, name: "ds", email: "ds@jlc", phone: 99999, course: "React" }
  ]
};

export const MyApplicationData = ({ children }) => {

  const [state, dispatch] = useReducer(myreducer, initialState);

  return (
    <MyContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;