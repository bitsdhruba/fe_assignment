import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Answer = string[];

const initialState: Answer = [];

export const saveSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export default saveSlice.reducer;
export const { save } = saveSlice.actions;
