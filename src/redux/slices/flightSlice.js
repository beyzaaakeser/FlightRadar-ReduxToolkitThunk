import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  error: null,
  flights: [],
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {},

});

export default flightSlice.reducer;
