import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { useRegistrContext } from "../contexts/RegistrContext";
import { Navigate } from "react-router-dom";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#79E0EE",
    },
    background: {
      default: "#ffbee3",
    },
  },
});

export default function RegistrPage() {
  const [isLogin, setIsLogin] = React.useState(true);
  const { user, register, login } = useRegistrContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (isLogin) {
      login(data.get("email"), data.get("password"));
    } else {
      register(
        data.get("email"),
        data.get("password"),
        data.get("displayName"),
        data.get("photoURL")
      );
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar> */}
          <Typography component="h1" variant="h5">
            {isLogin ? "Sign in" : "Sign up"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {!isLogin && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="displayName"
                  autoComplete="name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="image"
                  label="Image"
                  name="photoURL"
                  autoComplete="image"
                />
              </>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, "&:hover": { backgroundColor: "#FFBDE6" } }}
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  onClick={() => setIsLogin((prev) => !prev)}
                  href="#"
                  variant="body2"
                  sx={{ color: "#333" }}
                >
                  {isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
