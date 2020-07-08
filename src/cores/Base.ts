import merge from 'deepmerge';
// jest error occurs when import from @/helpers
import { combineArrayMerge } from '@/helpers/combineArrayMerge';

export class Base {
  type: string;
  name: string;
  options: object = {};

  constructor(type: string, name: string, options: object) {
    this.type = type;
    this.name = name;
    this.options = options;
  }

  mergeOptions(options: object): void {
    this.options = merge(this.options, options, { arrayMerge: combineArrayMerge });
  }
}
