import { Box, Container } from "@mui/material";
import Timer from "../components/testComponents/Timer";
import TestCard from "../components/testComponents/TestCard";

const Test = () => {
  return (
    <Container>
      <Timer />
      <Box
        component="div"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"80vh"}
      >
        <TestCard />
      </Box>
    </Container>
  );
};

export default Test;
