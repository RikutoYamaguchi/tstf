import { Data } from '@/cores';
import { transformPropertyDeep } from '@/helpers';

export function dataCompiler(resource: Data) {
  const start = `data "${resource.type}" "${resource.name}" {\n`;
  const end = `}\n`;
  const properties = transformPropertyDeep(resource.options, 0);
  return start + properties + end;
}
