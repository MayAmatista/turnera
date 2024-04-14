import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  return (
    <AppStateContext.Provider
      value={{
        selectedTimeSlot,
        setSelectedTimeSlot,
        selectedServices,
        setSelectedServices,
        selectedDate,
        setSelectedDate,
        selectedDateTime,
        setSelectedDateTime,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState debe ser usado dentro de un AppStateProvider");
  }
  return context;
};
