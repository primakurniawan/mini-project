import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    addSaved: (state, action) => {
      const { article } = action.payload;
      return [...state, article];
    },
    removeSaved: (state, action) => {
      const { id } = action.payload;
      return state.filter((e) => e.id !== id);
    },
  },
});

export const { actions, reducer: savedReducer } = savedSlice;
export const { addSaved, removeSaved } = actions;
export default savedReducer;
