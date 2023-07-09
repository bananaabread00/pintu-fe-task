import axios from 'axios';
import { CORS_PROXY_PATH } from '../shared/constants/CorsProxyPath';

const API_PATH = 'api.pintu.co.id/v2';

const api = axios.create({
  baseURL: CORS_PROXY_PATH + API_PATH
});

export default api;
