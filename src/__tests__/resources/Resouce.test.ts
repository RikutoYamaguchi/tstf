import { Resource } from '@/resources/Resource';

test('Resource mergeOptions Test', () => {
  const resource = new Resource('aws_vpc', 'example-vpc', {
    foo: 'foo',
  });

  resource.mergeOptions({
    bar: 'bar',
  });

  expect(resource.options).toEqual({
    foo: 'foo',
    bar: 'bar',
  });

  resource.mergeOptions({
    foo: {
      test: 'test',
    },
  });

  expect(resource.options).toEqual({
    foo: {
      test: 'test',
    },
    bar: 'bar',
  });

  resource.mergeOptions({
    foo: {
      test: 'foo',
      baz: 'baz',
    },
  });

  expect(resource.options).toEqual({
    foo: {
      test: 'foo',
      baz: 'baz',
    },
    bar: 'bar',
  });

  resource.mergeOptions({
    foo: [1, 2, 3],
  });

  expect(resource.options).toEqual({
    foo: [1, 2, 3],
    bar: 'bar',
  });

  resource.mergeOptions({
    foo: [4],
  });

  expect(resource.options).toEqual({
    foo: [1, 2, 3, 4],
    bar: 'bar',
  });
});
