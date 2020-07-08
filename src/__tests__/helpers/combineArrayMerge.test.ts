import { combineArrayMerge } from '@/helpers';

test('combineArrayMerge test', () => {
  expect(combineArrayMerge([1], [1, 2])).toEqual([1, 2]);
  expect(combineArrayMerge([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  expect(combineArrayMerge(['a', 'b', 'c'], [1, 2, 3])).toEqual(['a', 'b', 'c', 1, 2, 3]);
});
