import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import FaceIcon from "@mui/icons-material/Face";
import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const startHandler = (event: FormEvent) => {
    event.preventDefault();
    navigate("/test");
  };

  const [userData, setUserData] = useState({ email: "", password: "" });

  const changeHandler = (event: ChangeEvent) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: [event.target.value],
      };
    });
  };

  return (
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
        <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
          <FaceIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={startHandler} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            type="email"
            required
            fullWidth
            id="email"
            name="email"
            value={userData.email}
            label="Email Address"
            autoComplete="email"
            autoFocus
            onChange={changeHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            value={userData.password}
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={changeHandler}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            start test
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="body2">Forgot password?</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Typography variant="body2">
                  Don't have an account? Sign Up
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;

function Copyright(props: any) {
  return (
    <Typography
      component="div"
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h6" color="initial">
          Docta
        </Typography>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
