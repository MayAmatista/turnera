import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import servicesData from "../api/services.json";
import CategoryOption from "./CategoryOption";
import { Link } from "react-router-dom";
import { Service } from "../interfaces/Service";
import { useAppState } from "../AppStateContext";

const CategoryOptions: React.FC = () => {
  const { selectedServices, setSelectedServices } = useAppState();

  const services: Service[] = servicesData.services;
  const categories: string[] = Array.from(
    new Set(services.map((service) => service.category))
  );

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryExpand = (category: string) => {
    setExpandedCategory((prevState) =>
      prevState === category ? null : category
    );
  };

  const handleServiceSelect = (service: Service) => {
    const index = selectedServices.findIndex(
      (s: Service) => s.id === service.id
    );
    if (index === -1) {
      setSelectedServices([...selectedServices, service]);
    } else {
      setSelectedServices(
        selectedServices.filter((s: Service) => s.id !== service.id)
      );
    }
  };

  const isServiceSelected = (service: Service) => {
    return selectedServices.some((s: Service) => s.id === service.id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <div style={{ maxWidth: "100%", width: "80%", margin: "0 auto" }}>
        <div style={{ marginBottom: "20px" }}>
          <Typography variant="h6">Servicios seleccionados:</Typography>
          <div>
            {selectedServices.map((service: Service) => (
              <div
                key={service.id}
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                <Typography variant="body2">{service.name}</Typography>
              </div>
            ))}
          </div>
        </div>
        {categories.map((category) => (
          <Card
            key={category}
            style={{ marginBottom: "10px" }}
            variant="elevation"
          >
            <CardContent>
              <ListItem
                onClick={() => handleCategoryExpand(category)}
                style={{ backgroundColor: "#e0e0e0" }}
              >
                <ListItemText primary={category} />
                <IconButton>
                  {expandedCategory === category ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
              </ListItem>
              <Collapse
                in={expandedCategory === category}
                timeout="auto"
                unmountOnExit
              >
                <List>
                  {services
                    .filter((service: Service) => service.category === category)
                    .map((service, index) => (
                      <CategoryOption
                        key={`${service.id}-${index}`}
                        service={service}
                        isServiceSelected={isServiceSelected}
                        handleSelect={handleServiceSelect}
                      />
                    ))}
                </List>
              </Collapse>
            </CardContent>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: "20px", marginRight: "20px" }}>
        {selectedServices.length > 0 && (
          <Link to="/select-schedule">
            <Button variant="contained" color="primary">
              Siguiente
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoryOptions;
