import merge from 'deepmerge';

class Resource {
  type: string;
  name: string;
  options: object = {};

  constructor(type: string, name: string, options: object) {
    this.type = type;
    this.name = name;
    this.options = options;
  }

  mergeOptions(options: object): void {
    const combineMerge = (target: [], source: [], options: object) => {
      const destination = target.slice()

      source.forEach((item: any, index: number) => {
        if (typeof destination[index] === 'undefined') {
          // @ts-ignore
          destination[index] = options.cloneUnlessOtherwiseSpecified(item, options)
          // @ts-ignore
        } else if (options.isMergeableObject(item)) {
          // @ts-ignore
          destination[index] = merge(target[index], item, options)
          // @ts-ignore
        } else if (target.indexOf(item) === -1) {
          // @ts-ignore
          destination.push(item)
        }
      })
      return destination
    }

    this.options = merge(this.options, options, { arrayMerge: combineMerge });
  }
}

export { Resource };
