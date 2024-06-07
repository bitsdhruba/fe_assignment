import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

interface Question {
  currentQuestion: {
    id: number;
    type: string;
    question: string;
    options: string[];
  };
}

const MCQ = ({ currentQuestion }: Question) => {
  return (
    <div>
      <FormLabel
        id={currentQuestion.type}
        sx={{ fontSize: "1.2rem", color: "black" }}
      >
        {currentQuestion.question}
      </FormLabel>
      <RadioGroup aria-labelledby="mcq" name="test" aria-required>
        {currentQuestion.options.map((option: string, i: number) => {
          return (
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
              key={i}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default MCQ;
