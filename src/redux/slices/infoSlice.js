import { createSlice } from '@reduxjs/toolkit';
import { getInfo } from '../actions';

const initialState = {
  isLoading: false,
  error: null,
  info: null,
  route: [],
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    clearRoute: (state) => {
      state.route = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInfo.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getInfo.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.info = payload;
      state.route = payload.trail;
    });
  },
});
export const { clearRoute } = infoSlice.actions;
export default infoSlice.reducer;
