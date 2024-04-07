import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectService from "./pages/SelectService";
import SelectSchedule from "./pages/SelectSchedule";
import ConfirmAppointment from "./pages/ConfirmAppointment";
import { Service } from "./interfaces/Service";


const App: React.FC = () => {
  const [selectedServices, setSelectedServices] = React.useState<Service[]>([]);
  const [selectedDate, setSelectedDate] = React.useState<string>("");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select-service" element={<SelectService />} />
      <Route
        path="/select-schedule"
        element={
          <SelectSchedule
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        }
      />
      <Route
        path="/confirm-appointment"
        element={
          <ConfirmAppointment
            selectedServices={selectedServices}
            selectedDate={selectedDate}
          />
        }
      />
    </Routes>
  );
};

export default App;
