import React, { useEffect } from "react";
import { useToyContext } from "../contexts/ToyContext";
import ToyItem from "./ToyItem";

const ToysList = () => {
  const { toys, getToys } = useToyContext();
  useEffect(() => {
    getToys();
  }, []);

  return (
    <div
      style={{
        marginTop: "2%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "20px",
      }}
    >
      {toys.map((item) => (
        <ToyItem item={item} />
      ))}
    </div>
  );
};

export default ToysList;
