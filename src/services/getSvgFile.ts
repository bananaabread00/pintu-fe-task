import { CORS_PROXY_PATH } from '../shared/constants/CorsProxyPath';
import api from './base';

async function getSvgFile(url: string): Promise<string> {
  const response = await api.get(CORS_PROXY_PATH + url);
  return response.data;
}

export default getSvgFile;
