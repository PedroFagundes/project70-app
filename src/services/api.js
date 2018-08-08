import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projeto-70.herokuapp.com/api/v1',
});

export default api;
