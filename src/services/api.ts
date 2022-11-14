import axios from 'axios';

const api = axios.create({
  baseURL: 'https://thisorthat-api.herokuapp.com',
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
