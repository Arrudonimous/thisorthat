import axios from 'axios';

const api = axios.create({
  baseURL: 'https://thisorthat-api.herokuapp.com',
});

export default api;
