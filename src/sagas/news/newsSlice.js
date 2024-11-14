import { createSlice, createAction } from "@reduxjs/toolkit";

export const otherAction = createAction("updateLoading");

const newsSlice = createSlice({
  name: "new",
  initialState: {
    hits: [],
    loading: true,
    error: "",
    query: "",
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(otherAction, (state, action) => {
      state.loading = action.payload;
    });
  },
});

export const { getNews, setNews, setLoading, setError, setQuery } =
  newsSlice.actions;
export default newsSlice.reducer;
