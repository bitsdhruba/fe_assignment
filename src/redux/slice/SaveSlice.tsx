import { createSlice } from "@reduxjs/toolkit";

export const saveSlice = createSlice({
  name: "answer",
  initialState: [],
  reducers: {
    save: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default saveSlice.reducer;
export const { save } = saveSlice.actions;
