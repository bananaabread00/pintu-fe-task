import formatPrice from '../../utils/formatPrice';

test('should return formatPrice function value', () => {
  const value = formatPrice(10000);
  expect(value.replace(/\u00a0/g, ' ')).toBe('Rp 10.000');
});
