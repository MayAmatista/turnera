import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { ConfirmAppointmentProps } from "../interfaces/ConfirmAppointmentProps";


const ConfirmAppointment: React.FC<ConfirmAppointmentProps> = ({
  selectedServices,
  selectedDate,
}) => {

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Confirmar Turno
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">Servicios Seleccionados:</Typography>
          {selectedServices.map((service) => (
            <div key={service.id}>
              <Typography variant="body1">{service.name}</Typography>
              <Typography variant="body2">{service.description}</Typography>
            </div>
          ))}
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Fecha del Turno:
          </Typography>
          <Typography variant="body1">{selectedDate}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfirmAppointment;
