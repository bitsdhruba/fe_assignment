import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { AppContext } from "../context/AppContext";

interface Context {
  startHandler: () => void;
}

const Signup = () => {
  const [newUserData, setNewUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { startHandler } = useContext(AppContext) as Context;

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setNewUserData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: [event.target.value],
      };
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Welcome
        </Typography>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={startHandler} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={changeHandler}
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                type="text"
                value={newUserData.firstname}
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={changeHandler}
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                type="text"
                value={newUserData.lastname}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={changeHandler}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={newUserData.email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={changeHandler}
                required
                fullWidth
                type="password"
                id="password"
                name="password"
                value={newUserData.password}
                label="Password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography variant="subtitle2" color="initial">
                  Already have an account? Login
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Signup;

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
        <Typography variant="h6" color="primary.main">
          Docta
        </Typography>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
