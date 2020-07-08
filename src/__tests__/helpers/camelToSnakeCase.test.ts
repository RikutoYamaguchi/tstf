import { camelToSnakeCase } from '@/helpers';

test('camelToSnakeCase test', () => {
  expect(camelToSnakeCase('testTest')).toEqual('test_test');
  expect(camelToSnakeCase('testTest123')).toEqual('test_test123');
  expect(camelToSnakeCase('fooBarBaz')).toEqual('foo_bar_baz');

  // no match camel case
  expect(camelToSnakeCase('Name')).toEqual('Name');
  expect(camelToSnakeCase('NameTest')).toEqual('NameTest');
});
