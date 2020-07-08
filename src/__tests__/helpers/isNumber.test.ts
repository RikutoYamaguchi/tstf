import { isNumber } from '@/helpers';

test('isNumber Test', () => {
  expect(isNumber(0)).toBe(true);
  expect(isNumber(1)).toBe(true);
  expect(isNumber('')).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber(false)).toBe(false);
});
