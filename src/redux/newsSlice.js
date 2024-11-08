import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  try {
    const response = await axios.get("http://localhost:5000/NEWS");
    return response.data;
  } catch (error) {
    throw Error("Failed to fetch news data");
  }
});

export const fetchNew = createAsyncThunk(
  "news/fetchNew",
  async ({ newsId }, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/NEWS/${newsId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch news data.");
    }
  }
);

const newsSlice = createSlice({
  name: "students",
  initialState: {
    news: [],
    new: {},
    newsStatus: "idle",
    newStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.newsStatus = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.newsStatus = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.newsStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNew.pending, (state) => {
        state.newStatus = "loading";
      })
      .addCase(fetchNew.fulfilled, (state, action) => {
        state.newStatus = "succeeded";
        state.new = action.payload;
      })
      .addCase(fetchNew.rejected, (state, action) => {
        state.newStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
