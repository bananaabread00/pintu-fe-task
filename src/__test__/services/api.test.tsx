import MockAdapter from 'axios-mock-adapter';
import api from '../../services/base';
import getPriceChanges from '../../services/getPriceChanges';
import getSupportedCurrencies from '../../services/getSupportedCurrencies';
import { getPriceChangesData } from './data/getPriceChangesData';
import { getSupportedCurrenciesData } from './data/getSupportedCurrenciesData';

const mock = new MockAdapter(api);

describe('test for api calls', () => {
  it('should fetch price changes successfully', async () => {
    mock.onGet('/trade/price-changes').reply(200, getPriceChangesData);
    const result = await getPriceChanges();
    expect(result).toEqual(getPriceChangesData);
  });
  it('should fetch supported currencies successfully', async () => {
    mock.onGet('/wallet/supportedCurrencies').reply(200, getSupportedCurrenciesData);
    const result = await getSupportedCurrencies();
    expect(result).toEqual(getSupportedCurrenciesData);
  });
});
