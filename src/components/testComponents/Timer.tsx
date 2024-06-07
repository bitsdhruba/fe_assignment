import { Box, Typography } from "@mui/material";

const Timer = () => {
  return (
    <Box
      height={40}
      display={"flex"}
      justifyContent={"end"}
      alignItems={"center"}
    >
      <Typography variant="h6" color="red.main">
        30:00
      </Typography>
    </Box>
  );
};

export default Timer;
