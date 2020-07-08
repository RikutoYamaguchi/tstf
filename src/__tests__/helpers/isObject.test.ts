import { isObject } from '@/helpers';

test('isObject Test', () => {
  expect(isObject({})).toBe(true);
  expect(isObject({ test: 'test' })).toBe(true);
  expect(isObject(0)).toBe(false);
  expect(isObject(1)).toBe(false);
  expect(isObject([])).toBe(false);
  expect(isObject('')).toBe(false);
  expect(isObject('test')).toBe(false);
});
