import { isObject, camelToSnakeCase, isBoolean, isNumber, isArray, appendNest } from '@/helpers';

export function transformPropertyDeep(options: object, nest: number = 0): string {
  let result = '';

  Object.entries(options).forEach(([key, value]) => {
    if (value == null) {
      throw Error('Option value must not be empty.');
    }

    if (isObject(value)) {
      result += `${appendNest(nest + 1)}${camelToSnakeCase(key)} = {\n`;
      result += transformPropertyDeep(value, nest + 1);
      result += `${appendNest(nest + 1)}}\n`;
      return;
    }

    if (isBoolean(value)) {
      result += `${appendNest(nest + 1)}${camelToSnakeCase(key)} = ${value ? 'true' : 'false'}\n`;
      return;
    }

    if (isNumber(value)) {
      result += `${appendNest(nest + 1)}${camelToSnakeCase(key)} = ${value}\n`;
      return;
    }

    if (isArray(value)) {
      let arrayContext = '[';

      value.forEach((item: any) => {
        if (isNumber(item)) {
          arrayContext += `${item}, `;
          return;
        }
        arrayContext += `"${item}", `;
      });

      result += `${appendNest(nest + 1)}${camelToSnakeCase(key)} = ${arrayContext.replace(/,\s$/, '')}]\n`;
      return;
    }

    result += `${appendNest(nest + 1)}${camelToSnakeCase(key)} = "${value}"\n`;
  });

  return result;
}
