import { configureStore } from '@reduxjs/toolkit';
import  mainReducer  from './reducer/reducer';

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;