import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
