export function sum(numbers: number[]): number {
  if (numbers.length === 0) return 0
  return numbers[0] + sum(numbers.slice(1))
}
