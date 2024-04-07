import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
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

const CategoryOptions: React.FC = () => {
  const services: Service[] = servicesData.services;
  const categories: string[] = Array.from(
    new Set(services.map((service) => service.category))
  );

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const handleCategoryExpand = (category: string) => {
    setExpandedCategory((prevState) =>
      prevState === category ? null : category
    );
  };

  const handleServiceSelect = (id: number) => {
    const index = selectedServices.indexOf(id);
    if (index === -1) {
      setSelectedServices([...selectedServices, id]);
    } else {
      setSelectedServices(
        selectedServices.filter((serviceId) => serviceId !== id)
      );
    }
  };

  const isServiceSelected = (id: number) => selectedServices.includes(id);

  return (
    <div style={{ maxWidth: "100%", width: "80%", margin: "0 auto" }}>
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h6">Servicios seleccionados:</Typography>
        <div>
          {selectedServices.map((serviceId) => {
            const service = services.find((s) => s.id === serviceId);
            return (
              <div
                key={serviceId}
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                <Typography variant="body2">{service?.name}</Typography>
              </div>
            );
          })}
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
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <CategoryOption
                      key={service.id}
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
      {selectedServices.length > 0 && (
        <Link to="/select-schedule">
          <Button variant="contained" color="primary">
            Siguiente
          </Button>
        </Link>
      )}
    </div>
  );
};

export default CategoryOptions;
