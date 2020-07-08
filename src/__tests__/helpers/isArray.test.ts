import { isArray } from '@/helpers';

test('isObject Test', () => {
  expect(isArray({})).toBe(false);
  expect(isArray({ test: 'test' })).toBe(false);
  expect(isArray(0)).toBe(false);
  expect(isArray(1)).toBe(false);
  expect(isArray([])).toBe(true);
  expect(isArray('')).toBe(false);
  expect(isArray('test')).toBe(false);
});
