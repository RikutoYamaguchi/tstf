import { Base } from '@/cores/Base';

test('Base test', () => {
  const baseInstance = new Base('aws_vpc', 'example-vpc', {
    foo: 'foo',
  });

  baseInstance.mergeOptions({
    bar: 'bar',
  });

  expect(baseInstance.options).toEqual({
    foo: 'foo',
    bar: 'bar',
  });

  baseInstance.mergeOptions({
    foo: {
      test: 'test',
    },
  });

  expect(baseInstance.options).toEqual({
    foo: {
      test: 'test',
    },
    bar: 'bar',
  });

  baseInstance.mergeOptions({
    foo: {
      test: 'foo',
      baz: 'baz',
    },
  });

  expect(baseInstance.options).toEqual({
    foo: {
      test: 'foo',
      baz: 'baz',
    },
    bar: 'bar',
  });

  baseInstance.mergeOptions({
    foo: [1, 2, 3],
  });

  expect(baseInstance.options).toEqual({
    foo: [1, 2, 3],
    bar: 'bar',
  });

  baseInstance.mergeOptions({
    foo: [4],
  });

  expect(baseInstance.options).toEqual({
    foo: [1, 2, 3, 4],
    bar: 'bar',
  });
});
