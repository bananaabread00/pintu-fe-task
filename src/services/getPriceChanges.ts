import { ApiResponse } from '../interfaces/api';
import { PriceChangesRes } from '../interfaces/market';
import api from './base';

async function getPriceChanges(): Promise<ApiResponse<PriceChangesRes[]>> {
  const response = await api.get<ApiResponse<PriceChangesRes[]>>('/trade/price-changes');
  return response.data;
}

export default getPriceChanges;
