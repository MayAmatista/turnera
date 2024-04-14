import React from "react";
import {
  ListItem,
  ListItemText,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Service } from "../interfaces/Service";

interface CategoryOptionProps {
  service: Service;
  isServiceSelected: (service: Service) => boolean;
  handleSelect: (service: Service) => void;
}

const CategoryOption: React.FC<CategoryOptionProps> = ({
  service,
  isServiceSelected,
  handleSelect,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ListItem
      onClick={() => handleSelect(service)}
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <ListItemText
          primary={
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {service.name}
            </Typography>
          }
          secondary={!isMobile && service.description}
        />
        {isMobile && (
          <Typography variant="body1" paragraph>
            {service.description}
          </Typography>
        )}
      </div>
      <Button
        variant={isServiceSelected(service) ? "contained" : "outlined"}
        color="primary"
        onClick={(e) => {
          e.stopPropagation();
          handleSelect(service);
        }}
        style={{ marginLeft: "auto", marginTop: isMobile ? "8px" : "0" }}
      >
        {isServiceSelected(service) ? "Seleccionado" : "Seleccionar"}
      </Button>
    </ListItem>
  );
};

export default CategoryOption;
