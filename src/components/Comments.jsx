import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  CssBaseline,
  IconButton,
  Input,
  InputLabel,
  TextField,
  Typography,
  createTheme,
  Rating,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  FormControl,
  ThemeProvider,
} from "react-bootstrap";
import { useRegistrContext } from "../contexts/RegistrContext";
import { useCommentContext } from "../contexts/CommentContext";
import { purple } from "@mui/material/colors";
import ClearIcon from "@mui/icons-material/Clear";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const Comments = ({ id }) => {
  const [inpVal, setInpVal] = useState("");
  const { user, isAdmin } = useRegistrContext();
  const { review, addComment, deleteComment } = useCommentContext();
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  const labels = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inpVal.trim() || !value) {
      return;
    }
    const data = {
      comment: inpVal,
      email: user.email,
      photoURL: user.photoURL,
      postId: id,
      date: new Date(),
      rating: value,
    };

    addComment(data);
    setInpVal("");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#ce93d8",
      },
    },
  });
  return (
    <Container component="main">
      <h3 style={{ color: "black", textAlign: "center" }}>Reviews</h3>
      {user ? (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <ThemeProvider theme={theme}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                margin: "0 auto",
                width: "90vh",
              }}
            >
              <TextField
                sx={{ backgroundColor: "white", mt: 0 }}
                label="Enter your review"
                variant="standard"
                value={inpVal}
                onChange={(e) => setInpVal(e.target.value)}
                multiline
                rows={2}
              />
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarOutlineIcon
                      style={{ opacity: 0.55 }}
                      fontSize="inherit"
                    />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>

              <Button
                type="submit"
                variant="outlined"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontSize: "30px",
                  borderColor: "black",
                  color: "black",
                  backgroundColor: "white",
                }}
              >
                Send
              </Button>
            </Box>
          </ThemeProvider>
        </Box>
      ) : null}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "90vh",
          mt: 3,
          mb: 3,
        }}
      >
        {review.filter((item) => item.postId === id).length > 0 ? (
          review
            .filter((item) => item.postId === id)
            .map((item, index) => (
              <Card key={item.id || index} sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={<Avatar src={item.photoURL} />}
                  title={item.email}
                  subheader={item.date}
                />

                <CardContent>
                  {isAdmin() ? (
                    <IconButton
                      sx={{ position: "absolute", top: "5px", right: "5px" }}
                      onClick={() => deleteComment(item.id)}
                    >
                      <ClearIcon />
                    </IconButton>
                  ) : null}
                  <Typography variant="body2" color="text.secondary">
                    {item.comment}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    readOnly
                    sx={{ position: "relative", top: "15px" }}
                  />
                </CardContent>
              </Card>
            ))
        ) : (
          <p style={{ textAlign: "center" }}>No comments</p>
        )}
      </Box>
    </Container>
  );
};

export default Comments;
