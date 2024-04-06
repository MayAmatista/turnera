import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        ¡Bienvenido a nuestra página!
      </Typography>
      <Link to="/select-service">
        <Button variant="contained" color="primary">
          Seleccionar Servicio
        </Button>
      </Link>
    </div>
  );
};

export default Home;
