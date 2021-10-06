import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user_id: null },
  reducers: {
    login: (state, action) => {
      const { user_id } = action.payload;
      console.log(action);
      return { user_id };
    },
    logout: () => {
      return { user_id: null };
    },
  },
});

export const { actions, reducer: authReducer } = authSlice;
export const { login, logout } = actions;
export default authReducer;
