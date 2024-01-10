import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="grid-container">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
