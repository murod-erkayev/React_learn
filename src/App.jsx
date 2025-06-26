import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="container mt-3">
      <h2 className="text-red-500">App Layout</h2>
      <Outlet /> 
    </div>
  );
};

export default App;
