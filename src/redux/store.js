import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import flightReducer from './slices/flightSlice';
import infoReducer from './slices/infoSlice';

const store = configureStore({
  reducer: {
    flight: flightReducer,
    info: infoReducer
  },
});

export default store;
