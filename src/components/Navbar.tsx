import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface Context {
  loggedin: boolean;
  logout: () => void;
}

const Navbar = () => {
  const { loggedin, logout } = useContext(AppContext) as Context;

  const navigate = useNavigate();

  function logoutHandler() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "white" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              color="primary.main"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Docta
              </Link>
            </Typography>

            {loggedin ? (
              <div>
                <Button variant="outlined" onClick={logoutHandler}>
                  Log out
                </Button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <Button variant="outlined" sx={{ mx: 1 }}>
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outlined">Signup</Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
