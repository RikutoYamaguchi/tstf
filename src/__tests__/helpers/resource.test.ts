import { resource } from '@/helpers';
import { Resource } from '@/cores';

test('resource Test', () => {
  const resourceInstance = resource('aws_vpc', 'example-vpc', {
    foo: 'foo',
  });

  expect(resourceInstance).toBeInstanceOf(Resource);
});
