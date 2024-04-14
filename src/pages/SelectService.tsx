import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CategoryOptions from "../components/CategoryOptions";

const SelectService: React.FC = () => {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography
            style={{
              paddingLeft: "10%"
            }}
            variant="h5"
          >
            Categorias
          </Typography>
          <CategoryOptions></CategoryOptions>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectService;
