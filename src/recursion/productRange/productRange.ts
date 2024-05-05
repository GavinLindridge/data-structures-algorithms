export function productRange(num: number): number {
  if (num === 1) return 1
  return num + productRange(num - 1)
}
