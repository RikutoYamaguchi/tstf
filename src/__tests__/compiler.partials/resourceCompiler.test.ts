import { resourceCompiler } from '@/compiler/partials';
import { resource } from '@/helpers';

test('resourceCompiler tset', () => {
  const testVpc = resource('aws_vpc', 'test', {
    cidrBlock: '10.0.0.0/16',
    enableDnsSupport: true,
    enableDnsHostnames: true,
    tags: {
      Name: 'test',
    },
  });

  expect(resourceCompiler(testVpc)).toEqual(`resource "aws_vpc" "test" {
  cidr_block = "10.0.0.0/16"
  enable_dns_support = true
  enable_dns_hostnames = true
  tags = {
    Name = "test"
  }
}
`);
});
