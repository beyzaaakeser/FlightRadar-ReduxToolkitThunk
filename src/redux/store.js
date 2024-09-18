import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import flightSlice from './slices/flightSlice';

const store = configureStore({
  reducer: {
    flight: flightSlice,
  },
});

export default store;
