import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../api';

export const getFlights = createAsyncThunk('flight/getFlights', async () => {
  const params = {
    bl_lat: '34.480238',
    bl_lng: '24.594651',
    tr_lat: '43.914447',
    tr_lng: '47.662137',
  };
  const res = await api.get('/flights/list-in-boundary', { params });
  const formatted = res.data.aircraft.map((item) =>({
    id:item[0],
    code:item[1],
    lat:item[2],
    lng:item[3]
  }))
  return formatted
});