import React, { useEffect } from "react";
import { useToyContext } from "../contexts/ToyContext";
import ToyItem from "./ToyItem";
import { Spinner } from "react-bootstrap";
import { useCommentContext } from "../contexts/CommentContext";

const ToysList = () => {
  const { toys, getToys } = useToyContext();
  const { getComments } = useCommentContext();
  useEffect(() => {
    setTimeout(() => {
      getToys();
      getComments();
    }, 100);
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
      {toys.length > 0 ? (
        toys.map((item) => <ToyItem item={item} key={item.id} />)
      ) : (
        <Spinner
          animation="grow"
          variant="danger"
          size="xxl"
          className="m-5 p-5"
        />
      )}
    </div>
  );
};

export default ToysList;
