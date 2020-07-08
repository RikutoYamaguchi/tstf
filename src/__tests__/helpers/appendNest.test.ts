import { appendNest } from '@/helpers';

test('appendNest test', () => {
  expect(appendNest(0)).toEqual('');
  expect(appendNest(1)).toEqual('  ');
  expect(appendNest(2)).toEqual('    ');
});
