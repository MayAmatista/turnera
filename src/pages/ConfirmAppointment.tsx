import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useAppState } from "../AppStateContext";
import { Service } from "../interfaces/Service";

const ConfirmAppointment: React.FC = () => {
  const {
    selectedServices: contextSelectedServices,
    selectedDateTime,
  } = useAppState();

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Confirmar Turno
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">Servicios Seleccionados:</Typography>
          {contextSelectedServices.map((service: Service) => (
            <div key={service.id}>
              <Typography variant="body1">{service.name}</Typography>
              <Typography variant="body2">{service.description}</Typography>
            </div>
          ))}
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Fecha del Turno:
          </Typography>
          <Typography variant="body1">{selectedDateTime?.date}</Typography>{" "}
          {selectedDateTime?.timeslot && (
            <>
              <Typography variant="h6" style={{ marginTop: "20px" }}>
                Horario del Turno:
              </Typography>
              <Typography variant="body1">
                {selectedDateTime.timeslot}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfirmAppointment;
