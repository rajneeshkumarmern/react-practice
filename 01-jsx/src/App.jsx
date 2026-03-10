import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LeadsList from "./components/LeadsList";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App container">
      <Header mybrand="Lead Manager" />
      <LeadsList />
    </div>
  );
};

export default App;