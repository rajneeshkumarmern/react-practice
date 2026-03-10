import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import LeadsList from "./components/LeadsList";
import { MyApplicationData } from "./appContext";

const App = () => {
  return (
    <MyApplicationData>

      <div className="App container">

        <Header mybrand="Lead Manager" />

        <LeadsList />

      </div>

    </MyApplicationData>
  );
};

export default App;