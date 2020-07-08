import { transformPropertyDeep } from '@/helpers';

test('transformPropertyDeep tset', () => {
  // boolean test
  expect(transformPropertyDeep({ mapPublicIpOnLaunch: true })).toEqual('  map_public_ip_on_launch = true\n');

  // number test
  expect(transformPropertyDeep({ port: 80 })).toEqual('  port = 80\n');

  // array test
  expect(transformPropertyDeep({ dependsOn: ['test'] })).toEqual('  depends_on = ["test"]\n');
  expect(transformPropertyDeep({ dependsOn: ['test', 'hoge'] })).toEqual('  depends_on = ["test", "hoge"]\n');
  expect(transformPropertyDeep({ dependsOn: [1] })).toEqual('  depends_on = [1]\n');
  expect(transformPropertyDeep({ dependsOn: [1, 2] })).toEqual('  depends_on = [1, 2]\n');

  // string test
  expect(transformPropertyDeep({ availabilityZone: 'ap-northeast-1a' })).toEqual(
    '  availability_zone = "ap-northeast-1a"\n',
  );

  // object test
  expect(transformPropertyDeep({ tags: { Name: 'test' } })).toEqual(`  tags = {
    Name = "test"
  }
`);

  expect(() => {
    transformPropertyDeep({ port: null });
  }).toThrow();
});
