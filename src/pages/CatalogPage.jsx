import React from "react";
import ToysList from "../components/ToysList";
import Filter from "../components/Filter";
import { Box } from "@mui/material";

const CatalogPage = () => {
  return (
    <div>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Filter />
      </Box>
      <ToysList />
    </div>
  );
};

export default CatalogPage;
