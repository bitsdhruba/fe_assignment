import { Box, Button, FormLabel, Grid, TextField, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
        sx={{ my: 2 }}
      />
      <Grid container spacing={1} justifyContent={"end"}>
        <Grid item xs={10} display={"flex"} justifyContent={"end"}>
          <Button type="button" variant="contained" sx={{ m: 1 }}>
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
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Descriptive;
