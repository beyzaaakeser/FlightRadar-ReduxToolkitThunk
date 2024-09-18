import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import flightReducer from './slices/flightSlice';

const store = configureStore({
  reducer: flightReducer,
});

export default store;
