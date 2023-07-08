import axios from 'axios';

const CORS_PROXY_API = 'https://node-cors-proxy.vercel.app/';
const API_PATH = 'api.pintu.co.id/v2';

const api = axios.create({
  baseURL: CORS_PROXY_API + API_PATH
});

export default api;
