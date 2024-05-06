export function collectStrings(obj: Object): string[] {
  return Object.entries(obj).reduce<any>((prev, [, value]) => {
    if (typeof value === 'string') {
      return prev.concat(value)
    } else if (typeof value === 'object') {
      return prev.concat(collectStrings(value))
    } else {
      return prev
    }
  }, [])
}
