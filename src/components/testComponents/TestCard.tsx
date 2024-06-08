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
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../../data/data";

const TestCard = () => {
  const navigate = useNavigate();

  function submitHandler(event: FormEvent) {
    event.preventDefault();
    navigate("/thanks");
  }

  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(data[index]);

  function nextHandler() {
    setIndex(index + 1);
    setCurrentQuestion(data[index + 1]);
  }

  return (
    <Container>
      <Box component="div" my={3}>
        <form onSubmit={submitHandler}>
          <FormControl fullWidth required>
            <Typography variant="h5" color="initial" my={3}>
              Question {index + 1}/{data.length}:
            </Typography>
            <Divider />
            {data[index].type === "multiple" ? (
              <MCQ currentQuestion={currentQuestion} />
            ) : (
              <Descriptive currentQuestion={currentQuestion} />
            )}
            <Divider />
            <Grid container spacing={1} my={3}>
              <Grid item xs={6} display={"flex"} justifyContent={"start"}>
                <Button type="submit" variant="contained">
                  finish test
                </Button>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                {index + 1 < data.length ? (
                  <Button
                    type="button"
                    variant="contained"
                    onClick={nextHandler}
                  >
                    Next
                  </Button>
                ) : (
                  <Button type="button" variant="contained" disabled>
                    Next
                  </Button>
                )}
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default TestCard;
