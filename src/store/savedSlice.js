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
      const { article_id } = action.payload;
      return state.filter((e) => e.article_id !== article_id);
    },
  },
});

export const { actions, reducer: savedReducer } = savedSlice;
export const { addSaved, removeSaved } = actions;
export default savedReducer;
