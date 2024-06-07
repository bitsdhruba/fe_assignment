import { Box, Container, Typography } from "@mui/material";
import thank from "../assets/thankyou.png";

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
        <Typography variant="h5" color="initial">
          Thankyou for Your Time
        </Typography>
      </Box>
    </Container>
  );
};

export default Thanks;
