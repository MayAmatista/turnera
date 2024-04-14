import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectService from "./pages/SelectService";
import SelectSchedule from "./pages/SelectSchedule";
import ConfirmAppointment from "./pages/ConfirmAppointment";
import { AppStateProvider } from "./AppStateContext";

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-service" element={<SelectService />} />
        <Route path="/select-schedule" element={<SelectSchedule />} />
        <Route path="/confirm-appointment" element={<ConfirmAppointment />} />
      </Routes>
    </AppStateProvider>
  );
};

export default App;
