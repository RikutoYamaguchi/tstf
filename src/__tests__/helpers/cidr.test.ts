import { splitCidr } from '@/helpers/cidr';

test('Split Cidr Test', () => {
  expect(splitCidr('10.0.0.0/16')).toEqual({
    network: [10, 0, 0, 0],
    bits: 16,
  });

  expect(splitCidr('192.168.1.1/24')).toEqual({
    network: [192, 168, 1, 1],
    bits: 24,
  });
});
