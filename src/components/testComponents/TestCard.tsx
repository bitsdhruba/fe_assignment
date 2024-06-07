import {
  Box,
  Button,
  Container,
  Grid,
  FormControl,
  Divider,
  Typography,
} from "@mui/material";
import MCQ from "./MCQ";
import Descriptive from "./Descriptive";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const TestCard = () => {
  const navigate = useNavigate();

  function submitHandler(event: FormEvent) {
    event.preventDefault();
    navigate("/thanks");
  }

  return (
    <Container>
      <Box component="div" my={3}>
        <form onSubmit={submitHandler}>
          <FormControl fullWidth required>
            <Typography variant="h5" color="initial" my={3}>
              Question 1:
            </Typography>
            <MCQ />
            <Divider />
            <Descriptive />
            <Divider />
            <Grid container spacing={1} my={3}>
              <Grid item xs={6} display={"flex"} justifyContent={"start"}>
                <Button type="submit" variant="contained">
                  finish test
                </Button>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <Button type="button" variant="contained">
                  Next
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default TestCard;
