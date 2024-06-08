import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slice/Slice";
import { saveSlice } from "../slice/SaveSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    answer: saveSlice.reducer,
  },
});
