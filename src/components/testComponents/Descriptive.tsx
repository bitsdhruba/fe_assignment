import { Box, Button, FormLabel, Grid, TextField, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { save } from "../../redux/slice/SaveSlice";

interface Question {
  currentQuestion: {
    id: number;
    type: string;
    question: string;
    options?: string[];
  };
}

const Descriptive = ({ currentQuestion }: Question) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const dispatch = useDispatch();

  const [answer, setAnswer] = useState<string>("");

  function answerHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setAnswer(e.target.value);
  }

  function saveHandler() {
    dispatch(save(answer));
  }

  return (
    <Box my={3}>
      <FormLabel
        id={currentQuestion.type}
        sx={{ fontSize: "1.2rem", color: "black" }}
      >
        {currentQuestion.question}
      </FormLabel>
      <TextField
        id={currentQuestion.type}
        label="Type Your Answer Here"
        variant="outlined"
        multiline
        fullWidth
        required
        name={`answer${currentQuestion.id}`}
        value={answer}
        onChange={answerHandler}
        sx={{ my: 2 }}
      />
      <Grid container spacing={1} justifyContent={"end"}>
        <Grid item xs={10} display={"flex"} justifyContent={"end"}>
          <Button
            type="button"
            variant="contained"
            sx={{ m: 1 }}
            onClick={saveHandler}
          >
            save
          </Button>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" name="file" />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Descriptive;
