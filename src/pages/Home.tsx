import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        ¡Bienvenido a nuestra página!
      </Typography>
      <Link to="/select-service" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Seleccionar Servicio
        </Button>
      </Link>
    </div>
  );
};

export default Home;
