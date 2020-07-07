import { resource } from '@/helpers/resource'
import { Resource } from '@/core/Resource';

test('resource Test', () => {
  const resourceInstance = resource('aws_vpc', 'example-vpc', {
    foo: 'foo',
  });

  expect(resourceInstance).toBeInstanceOf(Resource)
});
