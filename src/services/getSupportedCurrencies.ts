import { ApiResponse } from '../interfaces/api';
import { SupportedCurrenciesRes } from '../interfaces/market';
import api from './base';

async function getSupportedCurrencies(): Promise<ApiResponse<SupportedCurrenciesRes[]>> {
  const response = await api.get<ApiResponse<SupportedCurrenciesRes[]>>(
    '/wallet/supportedCurrencies'
  );
  return response.data;
}

export default getSupportedCurrencies;
