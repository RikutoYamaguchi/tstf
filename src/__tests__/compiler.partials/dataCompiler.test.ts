import { dataCompiler } from '@/compiler/partials';
import { data } from '@/helpers';

test('resourceCompiler tset', () => {
  const testData = data('aws_iam_policy_document', 'assume_role', {
    statement: {
      actions: ['sts:AssumeRole'],
      principals: {
        identifiers: ['example'],
        type: 'Service',
      },
    },
  });

  expect(dataCompiler(testData)).toEqual(`data "aws_iam_policy_document" "assume_role" {
  statement = {
    actions = ["sts:AssumeRole"]
    principals = {
      identifiers = ["example"]
      type = "Service"
    }
  }
}
`);
});
