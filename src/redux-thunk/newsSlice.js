import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";

export const setLoading = createAction("setLoading");

export const handleFetchNew = createAsyncThunk(
  "new/handleFetchNew",
  async (query, thunkAPI) => {
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);

const initialState = {
  hits: [],
  loading: true,
  error: "",
  query: "",
};

const newsSlice = createSlice({
  name: "new",
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(handleFetchNew.fulfilled, (state, action) => {
      state.hits = action.payload;
      state.loading = false;
    });
    builder.addCase(handleFetchNew.pending, (state, action) => {
      state.loading = true;
      state.hits = [];
    });
    builder.addCase(handleFetchNew.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(setLoading, (state, action) => {
      state.loading = action.payload;
    });
  },
});

// export const { setLoading } = newsSlice.actions;

export default newsSlice.reducer;
