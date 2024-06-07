import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const MCQ = () => {
  return (
    <div>
      <FormLabel id="mcq" sx={{ fontSize: "1.2rem", color: "black" }}>
        Pop quiz: MUI is...
      </FormLabel>
      <RadioGroup aria-labelledby="mcq" name="test" aria-required>
        <FormControlLabel value="best" control={<Radio />} label="The best!" />
        <FormControlLabel
          value="worst"
          control={<Radio />}
          label="The worst."
        />
        <FormControlLabel
          value="laura"
          control={<Radio />}
          label="The worst."
        />
        <FormControlLabel
          value="lassan"
          control={<Radio />}
          label="The worst."
        />
      </RadioGroup>
    </div>
  );
};

export default MCQ;
