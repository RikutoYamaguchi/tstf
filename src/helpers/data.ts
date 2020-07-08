import { Data } from '@/cores';

export function data(type: string, name: string, options: object) {
  return new Data(type, name, options);
}
