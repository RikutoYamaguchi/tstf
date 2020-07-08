import { Resource } from '@/cores';

export function resource(type: string, name: string, options: object) {
  return new Resource(type, name, options);
}
