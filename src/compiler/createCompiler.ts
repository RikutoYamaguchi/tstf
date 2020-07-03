import { AwsVpc } from '@/resources/AwsVpc';
import { awsVpcCompiler } from '@/compiler/partials';

class Compiler<T> {
  objectInstance: T;
  constructor(objectInstance: T) {
    this.objectInstance = objectInstance;
  }
  compile() {
    if (this.objectInstance instanceof AwsVpc) {
      return awsVpcCompiler(this.objectInstance);
    }
  }
}

const createCompiler = (objectInstance: any) => {
  if (objectInstance instanceof AwsVpc) {
    return new Compiler<AwsVpc>(objectInstance);
  }
  throw Error('Not match instance type.');
};

export { createCompiler };
