import { Resource } from '@/cores';
import { transformPropertyDeep } from '@/helpers';

export function resourceCompiler(resource: Resource) {
  const start = `resource "${resource.type}" "${resource.name}" {\n`;
  const end = `}\n`;
  const properties = transformPropertyDeep(resource.options, 0);
  return start + properties + end;
}
