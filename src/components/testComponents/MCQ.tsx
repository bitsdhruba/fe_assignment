import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

interface Question {
  currentQuestion: {
    id: number;
    type: string;
    question: string;
    options?: string[];
  };
}

const MCQ = ({ currentQuestion }: Question) => {
  const [selected, setSelected] = useState<string>("");
  const isSelected = (value: string): boolean => selected === value;

  function handleRadioClick(e: React.SyntheticEvent<Element, Event>) {
    setSelected((e.target as HTMLInputElement).value);
  }

  return (
    <div>
      <FormLabel
        id={currentQuestion.type}
        sx={{ fontSize: "1.2rem", color: "black" }}
      >
        {currentQuestion.question}
      </FormLabel>
      <RadioGroup aria-labelledby="mcq" name="test" aria-required>
        {currentQuestion.options?.map((option: string, i: number) => {
          return (
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
              key={i}
              checked={isSelected(option)}
              onChange={handleRadioClick}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default MCQ;
