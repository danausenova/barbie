import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { useToyContext } from "../contexts/ToyContext";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { useCommentContext } from "../contexts/CommentContext";

export default function ToysDetailsPage() {
  const { getOneToy, toy } = useToyContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [oneToy, setOneToy] = React.useState({
    title: "",
    price: "",
    description: "",
    image1: "",
    image2: "",
    image3: "",
  });
  const { getComments } = useCommentContext();

  React.useEffect(() => {
    getOneToy(id);
    getComments();
    document.body.classList.add("body-favorite");
    return () => {
      document.body.classList.remove("body-favorite");
    };
  }, []);

  React.useEffect(() => {
    setOneToy(toy);
  }, [toy]);

  return (
    <Container
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <ImageList
          sx={{
            width: "100%",
            height: 450,
            "@media (min-width: 768px)": { width: "50%" },
          }}
          variant="standard"
          cols={3}
          gap={8}
        >
          <ImageListItem>
            <img
              src={oneToy.image1}
              style={{ width: "100%", maxWidth: "none" }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={oneToy.image2}
              style={{ width: "100%", maxWidth: "none" }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={oneToy.image3}
              style={{ width: "100%", maxWidth: "none" }}
            />
          </ImageListItem>
        </ImageList>
        <Box
          sx={{
            width: "100%",
            height: 450,
            "@media (min-width: 768px)": { width: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            padding: "10px",
            textAlign: "center",
          }}
          variant="standard"
        >
          <h3>{oneToy.title}</h3>
          <p>{oneToy.description}</p>
          <h3>{`${oneToy.price}$`}</h3>
        </Box>
      </Box>
      <Box>
        <Comments id={id} />
      </Box>
    </Container>
  );
}
