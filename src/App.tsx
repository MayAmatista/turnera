import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SelectService from "./pages/SelectService";
import SelectSchedule from "./pages/SelectSchedule";
import ConfirmAppointment from "./pages/ConfirmAppointment";
import { AppStateProvider } from "./AppStateContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4b5c6b", 
    },
    secondary: {
      main: "#788896",
    },
    text: {
      primary: "#56626d",
    },
  },
});

const App: React.FC = () => {
    const location = useLocation();
    const steps = [
      "Seleccionar Servicio",
      "Seleccionar Horario",
      "Confirmar Turno",
    ];
    const activeStep = (() => {
      switch (location.pathname) {
        case "/select-service":
          return 0;
        case "/select-schedule":
          return 1;
        case "/confirm-appointment":
          return 2;
        default:
          return 0;
      }
    })();

  return (
    <ThemeProvider theme={theme}>
      <AppStateProvider>
        <Box sx={{ width: "100%" }} marginBottom={"10px"}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-service" element={<SelectService />} />
          <Route path="/select-schedule" element={<SelectSchedule />} />
          <Route path="/confirm-appointment" element={<ConfirmAppointment />} />
        </Routes>
      </AppStateProvider>
    </ThemeProvider>
  );
};

export default App;
