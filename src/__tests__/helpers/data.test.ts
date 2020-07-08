import { data } from '@/helpers';
import { Data } from '@/cores';

test('resource Test', () => {
  const dataInstance = data('aws_iam_policy_document', 'assume_role', {
    foo: 'foo',
  });

  expect(dataInstance).toBeInstanceOf(Data);
});
