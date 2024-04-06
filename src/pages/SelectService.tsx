import React from "react";
import { Typography } from "@mui/material";
import CategoryCard from "../components/CategoryCard";

const SelectService: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Seleccionar Servicio
      </Typography>
      <CategoryCard></CategoryCard>
    </div>
  );
};

export default SelectService;
