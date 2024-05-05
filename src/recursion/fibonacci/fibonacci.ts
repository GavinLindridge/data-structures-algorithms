export function fibonacci(num: number): number {
  if (num <= 2) return 1

  return fibonacci(num - 2) + fibonacci(num - 1)
}
