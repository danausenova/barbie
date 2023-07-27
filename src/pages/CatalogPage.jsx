import React, { useEffect } from "react";
import ToysList from "../components/ToysList";
import { Box, Pagination } from "@mui/material";
import { useToyContext } from "../contexts/ToyContext";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../utils/consts";
import Filter from "../components/Filter";

const CatalogPage = () => {
  const { pageTotalCount, page, setPage, getToys } = useToyContext();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getToys();
  }, [searchParams]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      _page: page,
      _limit: LIMIT,
    });
  }, [page]);

  return (
    <div>
      <ToysList />
      <Box
        sx={{
          maxWidth: "max-content",
          margin: "30px auto",
        }}
      >
        <Pagination
          count={pageTotalCount}
          page={page}
          onChange={(_, val) => setPage(val)}
        />
      </Box>
    </div>
  );
};

export default CatalogPage;
