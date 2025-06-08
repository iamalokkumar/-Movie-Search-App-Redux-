import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '7837c815';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (searchTerm) => {
    const res = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${searchTerm}`);
    return res.data;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.Search || [];
        if (action.payload.Response === "False") {
          state.error = action.payload.Error;
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
