import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/jsvini/desafio-frontend/master/assets/api.json'
});

export default api;