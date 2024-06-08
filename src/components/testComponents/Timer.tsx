import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const navigate = useNavigate();

  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = new Date().getTime() + 30 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = timer - now;

      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setMinute(m);

      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setSecond(s);

      if (m === 0 && s === 0) {
        navigate("/thanks");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      height={40}
      display={"flex"}
      justifyContent={"end"}
      alignItems={"center"}
    >
      <Typography variant="h5" color="primary.dark">
        {minute}:{second}
      </Typography>
    </Box>
  );
};

export default Timer;
