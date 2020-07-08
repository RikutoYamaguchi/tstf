export function camelToSnakeCase(value: string): string {
  // no match camel case
  if (value.match(/^[A-Z].*/)) {
    return value;
  }

  return value.replace(/([A-Z])/g, (s) => {
    return '_' + s.charAt(0).toLowerCase();
  });
}
