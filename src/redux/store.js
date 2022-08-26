import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/posts/posts';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;