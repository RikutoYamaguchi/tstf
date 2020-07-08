import { dataCompiler, resourceCompiler } from '@/compiler/partials';
import { Resource, Data } from '@/cores';

class Compiler<T> {
  objectInstance: T;
  constructor(objectInstance: T) {
    this.objectInstance = objectInstance;
  }
  compile() {
    if (this.objectInstance instanceof Resource) {
      return resourceCompiler(this.objectInstance);
    }
    if (this.objectInstance instanceof Data) {
      return dataCompiler(this.objectInstance);
    }
  }
}

const createCompiler = (objectInstance: any) => {
  if (objectInstance instanceof Resource) {
    return new Compiler<Resource>(objectInstance);
  }
  if (objectInstance instanceof Data) {
    return new Compiler<Resource>(objectInstance);
  }

  throw Error('Not match instance type.');
};

export { createCompiler };
