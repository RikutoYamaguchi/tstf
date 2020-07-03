import fs from 'fs';
import { createCompiler } from './createCompiler';

const compile = (output: string, ...objectInstances: object[]) => {
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
  }

  let context = '';
  objectInstances.forEach((objectInstance) => {
    const compiler = createCompiler(objectInstance);
    context += compiler.compile();
  });

  fs.writeFileSync(output + '/main.tf', context);
};

export { compile };
