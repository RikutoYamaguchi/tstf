import {AwsVpc} from '../..';

const awsVpcCompiler = (awsVpc: AwsVpc) => {
    return `resource "aws_vpc" "${awsVpc.name}" {
  cidr_block = "${awsVpc.cidrBlock}"
  enable_dns_support = ${awsVpc.enableDnsSupport ? 'true' : 'false'}
  enable_dns_hostnames = ${awsVpc.enableDnsHostnames ? 'true' : 'false'}

  tags = {
    Name = "${awsVpc.tags.name}"
  }
}

`
}

export {
    awsVpcCompiler
}
