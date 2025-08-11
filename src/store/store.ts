import { configureStore } from '@reduxjs/toolkit';
import followingReducer from './followingSlice';
import goldstatReducer from './goldstatSlice';

export const store = configureStore({
  reducer: {
    following: followingReducer,
    goldstat: goldstatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
