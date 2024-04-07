import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CategoryOptions from "./CategoryOptions";

const CategoryCard: React.FC = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">Categorias</Typography>
        <CategoryOptions></CategoryOptions>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;



