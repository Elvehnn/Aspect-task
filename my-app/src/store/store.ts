import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentReducer';

export const store = configureStore({
  reducer: contentReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
