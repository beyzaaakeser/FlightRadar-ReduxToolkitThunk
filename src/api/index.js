import axios from 'axios';

const api = axios.create({
  baseURL: 'https://flight-radar1.p.rapidapi.com',

  headers: {
    'x-rapidapi-key': '9cd9861176mshd8a45d3f19402c5p1dc68djsn1f78a25a31dc',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  }
});

export default api;
