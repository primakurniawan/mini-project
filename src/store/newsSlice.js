import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    queries: {
      q: "",
      country: "id",
      category: "general",
      pageSize: 20,
      page: 1,
    },
    totalResults: 0,
    loading: null,
    error: null,
  },
  reducers: {
    updateNews: (state, action) => {
      const { articles, queries, totalResults } = action.payload;
      return { ...state, articles, queries, totalResults };
    },
    setError: (state, action) => {
      const { error } = action.payload;
      return { ...state, error };
    },
    setLoading: (state, action) => {
      const { loading } = action.payload;
      return { ...state, loading };
    },
  },
});

export const { actions, reducer: newsReducer } = newsSlice;
export const { updateNews, setLoading, setError } = actions;
export default newsReducer;
