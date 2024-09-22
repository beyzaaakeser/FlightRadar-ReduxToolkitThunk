import axios from 'axios';

const api = axios.create({
  baseURL: 'https://flight-radar1.p.rapidapi.com',

  headers: {
    'x-rapidapi-key': '93abac49f1mshf96bc7f455d8f52p1bfff8jsn714e0a7240e5',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
  },
});

export default api;
