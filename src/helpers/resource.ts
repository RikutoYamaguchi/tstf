import { Resource } from '@/cores/Resource';

export function resource(type: string, name: string, options: object) {
  return new Resource(type, name, options)
}
