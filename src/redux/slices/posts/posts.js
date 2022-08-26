import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = 'https://api.jsonbin.io/v3/b/62ed1523e13e6063dc6cd5ee';
const ACCESS_KEY = '$2b$10$smpejxmp4gmvulslxzJAs.gQ4v4PXntI/WeSCOOFXAd3KZl7LFJcW';
const initialState = {
  posts: {},
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL, { headers: { 'X-ACCESS-KEY': ACCESS_KEY } });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;