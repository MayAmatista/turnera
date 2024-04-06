import React, { useState } from "react";
import { Button, Collapse, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import servicesData from "../api/services.json";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CategoryOptions: React.FC = () => {
    const services = servicesData.services;
    const [expandedService, setExpandedService] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null); 
    } else {
      setExpandedService(id);
    }
  };

  return (
    <div>
      <List>
        {services.map((service) => (
          <React.Fragment key={service.id}>
            <ListItem button onClick={() => handleExpand(service.id)}>
              <ListItemText primary={service.name} />
              <IconButton>
                {expandedService === service.id ? (
                  <RemoveIcon />
                ) : (
                  <AddIcon />
                )}
              </IconButton>
            </ListItem>
            <Collapse
              in={expandedService === service.id}
              timeout="auto"
              unmountOnExit
            >
              <Typography variant="body2">{service.description}</Typography>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
      <Button variant="contained" color="primary">
        Reservar
      </Button>
      <Button variant="text" color="primary">
        Mis turnos
      </Button>
    </div>
  );
};

export default CategoryOptions;