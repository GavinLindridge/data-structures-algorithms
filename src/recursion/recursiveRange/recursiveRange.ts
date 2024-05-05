export function recursiveRange(num: number): number {
  if (num === 1) return 1
  return num + recursiveRange(num - 1)
}
