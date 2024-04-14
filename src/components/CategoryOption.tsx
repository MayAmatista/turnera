import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
  return (
    <ListItem
      onClick={() => handleSelect(service)}
      style={{
        backgroundColor: isServiceSelected(service) ? "lightgrey" : "white",
      }}
    >
      <ListItemText primary={service.name} />
      <IconButton>
        {isServiceSelected(service) ? <RemoveIcon /> : <AddIcon />}
      </IconButton>
    </ListItem>
  );
};

export default CategoryOption;
