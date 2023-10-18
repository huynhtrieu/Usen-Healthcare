import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './count.slice';
import authSlice from './auth.slice';

export const store = configureStore({
  reducer: {
    count: counterReducer,
    auth: authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch