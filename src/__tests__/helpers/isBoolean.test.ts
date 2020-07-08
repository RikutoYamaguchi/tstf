import { isBoolean } from '@/helpers';

test('isBoolean Test', () => {
  expect(isBoolean(0)).toBe(false);
  expect(isBoolean(1)).toBe(false);
  expect(isBoolean('')).toBe(false);
  expect(isBoolean([])).toBe(false);
  expect(isBoolean({})).toBe(false);
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
});
