export function stringifyNumbers(obj: Object): Object {
  return Object.entries(obj).reduce<any>((prev, [key, value]) => {
    if (typeof value === 'number') {
      prev[key] = `${value}`
    } else if (Array.isArray(value)) {
      prev[key] = value.map(stringifyNumbers)
    } else if (typeof value === 'object') {
      prev[key] = stringifyNumbers(value)
    } else {
      prev[key] = value
    }

    return prev
  }, {})
}
