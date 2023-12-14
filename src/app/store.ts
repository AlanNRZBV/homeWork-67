import { configureStore } from '@reduxjs/toolkit';
import { codelockReducer } from '../containers/Codelock/codelockSlice.ts';

export const store = configureStore({
  reducer:{
    codelock: codelockReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;