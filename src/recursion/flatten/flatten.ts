export function flatten<T extends string | number | boolean>(
  arrays: (T | T[])[],
): T[] {
  return arrays.reduce<T[]>((acc, val) => {
    return Array.isArray(val)
      ? acc.concat(...flatten(val as T[]))
      : acc.concat(val as T)
  }, [])
}
