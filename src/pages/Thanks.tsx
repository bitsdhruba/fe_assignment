import { Box, Button, Container, Typography } from "@mui/material";
import thank from "../assets/thankyou.png";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <Container
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="div"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <img src={thank} alt="thankyou" />
        <Typography variant="h5" color="primary.main">
          Thank you for Your Time
        </Typography>
        <Link to="/">
          <Button variant="outlined" sx={{ my: 3 }}>
            go home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Thanks;
