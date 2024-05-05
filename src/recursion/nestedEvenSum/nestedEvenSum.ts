export function nestedEvenSum(obj: Object): number {
  return Object.values(obj).reduce((acc, value) => {
    if (typeof value === 'number' && value % 2 === 0) {
      return acc + value
    } else if (typeof value === 'object') {
      return acc + nestedEvenSum(value)
    }
    return acc
  }, 0)
}
