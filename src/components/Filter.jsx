import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../utils/consts";
import { useToyContext } from "../contexts/ToyContext";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );

  const handleChange = (_, value) => {
    value && setCategory(value);
  };

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    if (category === "all") {
      const { _page, q } = currentParams;
      setSearchParams({
        _limit: LIMIT,
        _page: _page || 1,
        q: q || "",
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
      });
    }
  }, [category]);

  return (
    <>
      <h4 style={{ textAlign: "center", color: "black", margin: "4% 0" }}>
        Category
      </h4>
      <ToggleButtonGroup
        color="secondary"
        value={category}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="doll">Doll</ToggleButton>
        <ToggleButton value="dollhouse">Dollhouse</ToggleButton>
        <ToggleButton value="cars">Cars</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default Filter;
