import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectService from "./pages/SelectService";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select-service" element={<SelectService />} />
    </Routes>
  );
};

export default App;
