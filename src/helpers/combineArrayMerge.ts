import merge, { Options } from 'deepmerge';

export function combineArrayMerge(target: any[], source: any[], options: Options = {}) {
  const destination = target.slice();

  source.forEach((item: any, index: number) => {
    if (typeof destination[index] === 'undefined') {
      // @ts-ignore
      destination[index] = options.hasOwnProperty('cloneUnlessOtherwiseSpecified')
        ? // @ts-ignore
          options.cloneUnlessOtherwiseSpecified(item, options)
        : item;
      // @ts-ignore
    } else if (options.hasOwnProperty('isMergeableObject') && options.isMergeableObject(item)) {
      // @ts-ignore
      destination[index] = merge(target[index], item, options);
      // @ts-ignore
    } else if (target.indexOf(item) === -1) {
      // @ts-ignore
      destination.push(item);
    }
  });

  return destination;
}
