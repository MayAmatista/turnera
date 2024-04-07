import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { CategoryOptionProps } from "../interfaces/CategoryOptionProps";


const CategoryOption: React.FC<CategoryOptionProps> = ({
  service,
  isServiceSelected,
  handleSelect,
}) => {
  return (
    <Card style={{ marginBottom: "10px" }} variant="outlined">
      <CardContent>
        <Typography variant="h6">{service.name}</Typography>
        <Typography variant="body2" style={{ marginBottom: "8px" }}>
          {service.description}
        </Typography>
        <Grid container justifyContent="flex-end">
          <Button
            variant={isServiceSelected(service.id) ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSelect(service.id)}
            style={{ marginLeft: "auto" }}
          >
            {isServiceSelected(service.id) ? "Seleccionado" : "Seleccionar"}
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CategoryOption;
