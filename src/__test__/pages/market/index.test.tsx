import React from 'react';
import { render, screen } from '@testing-library/react';
import Market from '../../../pages/Market';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getPriceChangesData, getSupportedCurrenciesData } from './data/marketData';

const queryClient = new QueryClient();
queryClient.setQueryData('supportedCurrencies', { ...getSupportedCurrenciesData });
queryClient.setQueryData('priceChanges', { ...getPriceChangesData });

describe('Market Page', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it('should render Market Page', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Market />
      </QueryClientProvider>
    );
    expect((await screen.findAllByText('Bitcoin')).length).toBe(3);
    expect(container).toMatchSnapshot();
  });
});
