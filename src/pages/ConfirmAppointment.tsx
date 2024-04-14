import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Modal,
  Box,
} from "@mui/material";
import { useAppState } from "../AppStateContext";
import { Service } from "../interfaces/Service";
import { Link } from "react-router-dom";

const ConfirmAppointment: React.FC = () => {
  const { selectedServices: contextSelectedServices, selectedDateTime } =
    useAppState();

  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
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
            Fecha:
          </Typography>
          <Typography variant="body1">
            {selectedDateTime?.date} {selectedDateTime.timeslot}
          </Typography>{" "}
        </CardContent>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "10px" }}
        >
          <Grid item>
            <Link to="/select-schedule">
              <Button variant="contained" color="primary">
                Anterior
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Confirmar
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Hemos registrado tu turno
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Te esperamos en la fecha seleccionada.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmAppointment;
